/**
 * Shared Type Definitions
 *
 * Central location for all entity types used throughout the application.
 * These types are used by components, hooks, and mock data.
 */

/**
 * User entity type
 */
export interface User {
	id: number;
	name: string;
	email: string;
	role: 'admin' | 'user';
	createdAt: string;
}

/**
 * Product entity type
 */
export interface Product {
	id: number;
	name: string;
	price: number;
	stock: number;
	category: string;
	description: string;
}

/**
 * Post entity type
 */
export interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
	publishedAt: string;
	likes: number;
	published: boolean;
}
