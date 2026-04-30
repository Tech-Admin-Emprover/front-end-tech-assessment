/**
 * ProductGrid Component
 *
 * Displays all mock products in a grid layout using the shared Grid component.
 * Useful for seeing multiple card states at once.
 */

import { ProductCard } from '../ProductCard/ProductCard';
import { Grid, GridItem } from '../../shared/Grid/Grid';

export const ProductGrid: React.FC = () => {
	const productIds = [1, 2, 3, 4, 5];

	return (
		<Grid title="All Products" subtitle="Product 3 is sold out. Try editing stock levels.">
			{productIds.map((productId) => (
				<GridItem key={productId}>
					<ProductCard productId={productId} />
				</GridItem>
			))}
		</Grid>
	);
};
