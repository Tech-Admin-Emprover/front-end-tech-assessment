/**
 * Mock data for Posts
 * Used for development and testing without a real API
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

export const MOCK_POSTS: Record<number, Post> = {
	1: {
		id: 1,
		title: 'Getting Started with React Hooks',
		content:
			'React Hooks revolutionize how we write functional components. Learn about useState, useEffect, and custom hooks to build more efficient applications.',
		author: 'Sarah Chen',
		publishedAt: '2024-03-15',
		likes: 324,
		published: true
	},
	2: {
		id: 2,
		title: 'Best Practices for Component Design',
		content:
			'In this article, we explore headless components, composition patterns, and how to build truly reusable UI components that work across different entity types.',
		author: 'Marco Rivera',
		publishedAt: '2024-03-18',
		likes: 187,
		published: true
	},
	3: {
		id: 3,
		title: 'CSS Grid vs Flexbox: When to Use Each',
		content:
			'A deep dive into modern CSS layout techniques. Understand the differences, use cases, and best practices for choosing the right tool for your layout.',
		author: 'Elena Kowalski',
		publishedAt: '2024-03-20',
		likes: 456,
		published: true
	},
	4: {
		id: 4,
		title: 'Testing React Components Effectively',
		content:
			'Writing maintainable tests for React components is essential. Learn about React Testing Library, how to test behavior over implementation details, and best practices.',
		author: 'James Wilson',
		publishedAt: '2024-03-22',
		likes: 92,
		published: true
	},
	5: {
		id: 5,
		title: 'The Future of Web Development',
		content:
			'An exploration of emerging trends in web development. We discuss server components, edge computing, AI integration, and the evolving landscape of modern web.',
		author: 'Priya Patel',
		publishedAt: '2024-03-25',
		likes: 0,
		published: false
	}
};
