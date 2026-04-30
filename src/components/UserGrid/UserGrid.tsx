/**
 * UserGrid Component
 *
 * Displays all mock users in a grid layout using the shared Grid component.
 * Useful for seeing multiple card states at once.
 */

import { UserCard } from '../UserCard/UserCard';
import { Grid, GridItem } from '../../shared/Grid/Grid';

export const UserGrid: React.FC = () => {
	const userIds = [1, 2, 3, 4];

	return (
		<Grid title="All Users" subtitle="Admins (1, 4) can edit. Regular users (2, 3) cannot.">
			{userIds.map((userId) => (
				<GridItem key={userId}>
					<UserCard userId={userId} />
				</GridItem>
			))}
		</Grid>
	);
};
