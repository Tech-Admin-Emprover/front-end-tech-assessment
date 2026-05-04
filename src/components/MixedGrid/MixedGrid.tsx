/**
 * MixedGrid Component
 *
 * Displays 2 of each card type (User, Product, Post) in a grid layout.
 * Perfect for demonstrating height inconsistency across different card types
 * and for working on grid item height consistency bonus challenges.
 */

import { UserCard } from '../UserCard/UserCard';
import { ProductCard } from '../ProductCard/ProductCard';
import { Grid, GridItem } from '../../shared/Grid/Grid';

export const MixedGrid: React.FC = () => {
	return (
		<Grid
			title="Mixed Cards Preview"
			subtitle="2 of each card type showing height inconsistency"
		>
			<GridItem>
				<UserCard userId={1} />
			</GridItem>
			<GridItem>
				<ProductCard productId={1} />
			</GridItem>
			<GridItem>
				<div style={{ padding: '1rem', textAlign: 'center', color: '#999' }}>
					Post Card 1 (To be created)
				</div>
			</GridItem>
			<GridItem>
				<UserCard userId={2} />
			</GridItem>
			<GridItem>
				<ProductCard productId={2} />
			</GridItem>
			<GridItem>
				<div style={{ padding: '1rem', textAlign: 'center', color: '#999' }}>
					Post Card 2 (To be created)
				</div>
			</GridItem>
		</Grid>
	);
};
