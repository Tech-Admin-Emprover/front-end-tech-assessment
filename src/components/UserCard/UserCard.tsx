import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../shared/Button/Button';
import '../../shared/Button/Button.css';

/**
 * Sterk gekoppelde UserCard-component
 *
 * Problemen:
 * 1. Directe API-oproep naar fetchUser() - moeilijk te testen, niet herbruikbaar
 * 2. Gebruikerspecifieke logica vermengd met presentatie
 * 3. Kan niet voor andere entiteittypen (Product, Post, enz.) worden gebruikt
 * 4. Statusbeheer, gegevensophaling en UI allemaal in één component
 * 5. Moeilijk om afhankelijkheden voor testen na te bootsen
 */

interface User {
	id: number;
	name: string;
	email: string;
	role: 'admin' | 'user';
	createdAt: string;
}

export const UserCard: React.FC<{ userId: number }> = ({ userId }) => {
	const { t } = useTranslation();
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState('');
	const [permissionError, setPermissionError] = useState<string | null>(null);

	useEffect(() => {
		// Directe API-oproep - sterk gekoppeld aan gebruikersendpunt
		const fetchUserData = async () => {
			try {
				setLoading(true);
				const response = await fetch(`/api/users/${userId}`);
				if (!response.ok) throw new Error('Gebruiker ophalen mislukt');
				const data = await response.json();
				setUser(data);
				setEditedName(data.name);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Onbekende fout');
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
	}, [userId]);

	const handleSave = async () => {
		if (!user) return;

		try {
			setPermissionError(null);
			// Directe API-oproep om gebruiker bij te werken
			const response = await fetch(`/api/users/${userId}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: editedName })
			});

			if (!response.ok) {
				const errorData = await response.json();
				setPermissionError(errorData.error || 'Gebruiker bijwerken mislukt');
				return;
			}

			const updated = await response.json();
			setUser(updated);
			setIsEditing(false);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Onbekende fout');
		}
	};

	if (loading) return <div data-testid="user-card__loading">{t('userCard.loading')}</div>;
	if (error) {
		return (
			<div data-testid="user-card__error">
				{t('userCard.error')}
				{error}
			</div>
		);
	}
	if (!user) return <div data-testid="user-card__not-found">{t('userCard.notFound')}</div>;

	// Display logic is coupled with user-specific entity
	const isAdmin = user.role === 'admin';
	const createdDate = new Date(user.createdAt).toLocaleDateString();

	return (
		<div data-testid="user-card" className="user-card">
			<div className="user-card__header">
				<h2 className="user-card__name">
					{isEditing ? (
						<input
							data-testid="user-card__name-input"
							type="text"
							value={editedName}
							onChange={(e) => setEditedName(e.target.value)}
							className="user-card__input"
						/>
					) : (
						user.name
					)}
				</h2>
				{isAdmin && <span className="user-card__badge">{t('userCard.admin')}</span>}
			</div>

			<div className="user-card__body">
				<p>
					<strong>{t('userCard.email')}</strong> {user.email}
				</p>
				<p>
					<strong>{t('userCard.created')}</strong> {createdDate}
				</p>
			</div>

			{permissionError && (
				<div data-testid="user-card__permission-error" className="user-card__error">
					⚠️ {permissionError}
				</div>
			)}

			<div className="user-card__actions">
				{isEditing ? (
					<>
						<Button
							data-testid="user-card__save-btn"
							variant="primary"
							onClick={handleSave}
						>
							{t('userCard.save')}
						</Button>
						<Button
							data-testid="user-card__cancel-btn"
							variant="secondary"
							onClick={() => {
								setIsEditing(false);
								setEditedName(user.name);
								setPermissionError(null);
							}}
						>
							{t('userCard.cancel')}
						</Button>
					</>
				) : (
					<Button
						data-testid="user-card__edit-btn"
						variant="primary"
						onClick={() => setIsEditing(true)}
						disabled={!isAdmin}
						title={!isAdmin ? t('userCard.onlyAdminsEdit') : t('userCard.editUser')}
					>
						{t('userCard.edit')}
					</Button>
				)}
			</div>
		</div>
	);
};
