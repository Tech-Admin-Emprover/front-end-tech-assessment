/**
 * Global API Mock Helper
 *
 * Intercepts fetch calls and returns mock data with a simulated delay.
 * This allows the developer to see the components in action without a real backend.
 *
 * Usage:
 *   - import { setupMockAPI } from '@/mock/api'
 *   - setupMockAPI() in your app entry point (main.tsx)
 *   - Components will work as if calling real endpoints
 *
 * Supported endpoints:
 *   - GET /api/users/:id
 *   - PUT /api/users/:id
 *   - GET /api/products/:id
 *   - PUT /api/products/:id
 */

import { MOCK_USERS, isUserAdmin } from './users';
import { MOCK_PRODUCTS } from './products';

// Simulate network delay (ms)
const API_DELAY = 500;

interface MockResponse {
  ok: boolean;
  json: () => Promise<unknown>;
}

/**
 * Helper to create a mock response with delay
 */
function createMockResponse(ok: boolean, data: unknown, delay: number = API_DELAY): MockResponse {
  return {
    ok,
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    }),
  };
}

/**
 * Parse URL to extract entity type and ID
 * Examples:
 *   /api/users/1 -> { entity: 'users', id: '1' }
 *   /api/products/5 -> { entity: 'products', id: '5' }
 */
function parseEndpoint(url: string): { entity: string; id: string } | null {
  const match = url.match(/\/api\/(\w+)\/(\d+)/);
  if (match) {
    return { entity: match[1], id: match[2] };
  }
  return null;
}

/**
 * Mock handler for fetch requests
 */
function mockFetchHandler(url: string, options?: RequestInit): MockResponse {
  const endpoint = parseEndpoint(url);

  if (!endpoint) {
    return createMockResponse(false, { error: 'Not found' }, 100);
  }

  const { entity, id } = endpoint;
  const idNum = parseInt(id, 10);
  const method = options?.method || 'GET';

  // GET /api/users/:id
  if (entity === 'users' && method === 'GET') {
    const user = MOCK_USERS[idNum];
    if (user) {
      return createMockResponse(true, user);
    }
    return createMockResponse(false, { error: 'User not found' }, 100);
  }

  // PUT /api/users/:id
  if (entity === 'users' && method === 'PUT') {
    const user = MOCK_USERS[idNum];
    if (user && options?.body) {
      // Check if user has permission to edit (only admins can edit)
      if (!isUserAdmin(user)) {
        return createMockResponse(
          false,
          {
            error: 'Permission denied: Only admins can edit users',
            code: 'FORBIDDEN',
          },
          100,
        );
      }

      try {
        const updates = JSON.parse(options.body as string);
        const updated = { ...user, ...updates };
        MOCK_USERS[idNum] = updated;
        return createMockResponse(true, updated);
      } catch (err) {
        return createMockResponse(false, { error: 'Invalid request body' }, 100);
      }
    }
    return createMockResponse(false, { error: 'User not found' }, 100);
  }

  // GET /api/products/:id
  if (entity === 'products' && method === 'GET') {
    const product = MOCK_PRODUCTS[idNum];
    if (product) {
      return createMockResponse(true, product);
    }
    return createMockResponse(false, { error: 'Product not found' }, 100);
  }

  // PUT /api/products/:id
  if (entity === 'products' && method === 'PUT') {
    const product = MOCK_PRODUCTS[idNum];
    if (product && options?.body) {
      try {
        const updates = JSON.parse(options.body as string);
        const updated = { ...product, ...updates };
        MOCK_PRODUCTS[idNum] = updated;
        return createMockResponse(true, updated);
      } catch (err) {
        return createMockResponse(false, { error: 'Invalid request body' }, 100);
      }
    }
    return createMockResponse(false, { error: 'Product not found' }, 100);
  }

  // Unknown endpoint
  return createMockResponse(false, { error: 'Unknown endpoint' }, 100);
}

/**
 * Setup the global API mock
 *
 * Call this once in your app's entry point (main.tsx) to intercept all fetch calls
 * and return mock data instead.
 */
export function setupMockAPI(): void {
  if (typeof window !== 'undefined') {
    // Replace global fetch with mock
    (window.fetch as any) = (url: string, options?: RequestInit) => mockFetchHandler(url, options);

    console.log('✅ Mock API enabled. Intercepting fetch calls.');
  }
}

/**
 * Log current mock state (useful for debugging)
 */
export function logMockState(): void {
  console.group('Mock API State');
  console.log('Users:', MOCK_USERS);
  console.log('Products:', MOCK_PRODUCTS);
  console.groupEnd();
}
