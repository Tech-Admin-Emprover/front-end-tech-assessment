import React from 'react';
import './Card.css';

export interface CardProps {
	children?: React.ReactNode;
	className?: string;
}

/**
 * Card Component
 *
 * A headless, reusable card component that provides structure
 * (header, body, footer, actions) without dictating content or styling.
 *
 * This is where you'll build the abstraction that UserCard, ProductCard,
 * and PostCard can all compose.
 */
export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
