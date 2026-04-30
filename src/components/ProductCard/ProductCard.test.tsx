import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@/test/setup';
import { ProductCard } from './ProductCard';
import { resetMocks } from '@/test/mocks.js';

/**
 * Example tests for ProductCard (Before Refactoring)
 *
 * Notice: Same patterns as UserCard tests, but product-specific
 * This shows the repetition you'll eliminate with a shared Card component
 */

describe('ProductCard (Before Refactoring)', () => {
	beforeEach(() => {
		resetMocks();
		globalThis.fetch = vi.fn();
	});

	/**
	 * TEST 1: Product card displays product data correctly
	 */
	it('should render product data with in-stock status', async () => {
		(globalThis.fetch as any).mockResolvedValue({
			ok: true,
			json: async () => ({
				id: 1,
				name: 'Wireless Headphones',
				price: 79.99,
				stock: 15,
				category: 'Electronics',
				description: 'High-quality wireless headphones'
			})
		});

		render(<ProductCard productId={1} />);

		await waitFor(() => {
			expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
		});

		// Verify product data is displayed
		expect(screen.getByText('Electronics')).toBeInTheDocument();
		expect(screen.getByText('$79.99')).toBeInTheDocument();
		expect(screen.getByText(/15 in voorraad/)).toBeInTheDocument();
		expect(screen.getByText('High-quality wireless headphones')).toBeInTheDocument();
	});

	/**
	 * TEST 2: Product card shows sold-out status
	 */
	it('should show sold-out status when stock is 0', async () => {
		(globalThis.fetch as any).mockResolvedValue({
			ok: true,
			json: async () => ({
				id: 2,
				name: 'Out of Stock Item',
				price: 29.99,
				stock: 0,
				category: 'Books',
				description: 'This is out of stock'
			})
		});

		render(<ProductCard productId={2} />);

		await waitFor(() => {
			expect(screen.getByText('Uitverkocht')).toBeInTheDocument();
		});

		expect(screen.getByTestId('product-card-edit-btn')).toBeInTheDocument();
	});

	/**
	 * TEST 3: Product card allows editing stock count
	 */
	it('should allow editing and saving stock count', async () => {
		const mockProductData = {
			id: 1,
			name: 'Test Product',
			price: 29.99,
			stock: 10,
			category: 'Test',
			description: 'Test description'
		};

		(globalThis.fetch as any)
			.mockResolvedValueOnce({
				ok: true,
				json: async () => mockProductData
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ ...mockProductData, stock: 5 })
			});

		render(<ProductCard productId={1} />);

		// Wait for initial load
		await waitFor(() => {
			expect(screen.getByText('Test Product')).toBeInTheDocument();
		});

		// Click Edit button
		const editBtn = screen.getByTestId('product-card-edit-btn');
		fireEvent.click(editBtn);

		// Input should appear in edit mode
		const input = screen.getByTestId('product-card-stock-input') as HTMLInputElement;
		expect(input).toBeInTheDocument();
		expect(input.value).toBe('10');

		// Change stock
		fireEvent.change(input, { target: { value: '5' } });
		expect(input.value).toBe('5');

		// Click Save button
		const saveBtn = screen.getByTestId('product-card-save-btn');
		fireEvent.click(saveBtn);

		// Should verify fetch was called with updated data
		await waitFor(() => {
			expect(globalThis.fetch).toHaveBeenCalledWith(
				'/api/products/1',
				expect.objectContaining({
					method: 'PUT'
				})
			);
		});

		// Should return to display mode
		expect(screen.queryByTestId('product-card-stock-input')).not.toBeInTheDocument();
	});
});
