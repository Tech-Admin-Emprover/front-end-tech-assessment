import { useTranslation } from 'react-i18next';
import { UserCard } from './components/UserCard/UserCard';
import { ProductCard } from './components/ProductCard/ProductCard';
import { UserGrid } from './components/UserGrid/UserGrid';
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import './App.css';

const App = () => {
	const { t } = useTranslation();

	return (
		<div className="app">
			<header className="header">
				<h1>{t('header.title')}</h1>
				<p>{t('header.subtitle')}</p>
			</header>

			<main className="main">
				<section>
					<h2>{t('challenge.title')}</h2>
					<p>{t('challenge.description')}</p>

					<h3>{t('challenge.problem')}</h3>
					<ul>
						{(t('challenge.problemItems', { returnObjects: true }) as string[]).map(
							(item: string, i: number) => (
								<li key={i}>{item}</li>
							)
						)}
					</ul>
				</section>

				<section>
					<h2>{t('userStory.title')}</h2>

					<div
						style={{
							marginBottom: '1.5rem',
							padding: '1rem',
							backgroundColor: '#f9f9f9',
							borderLeft: '4px solid #646cff'
						}}
					>
						<p style={{ margin: '0 0 0.5rem 0' }}>{t('userStory.businessContext')}</p>
						<p style={{ margin: 0 }}>{t('userStory.overview')}</p>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h3>{t('userStory.userStoryLabel')}</h3>
						<p>
							<strong>{t('userStory.asA')}</strong> {t('userStory.iWantTo')}{' '}
							<strong>{t('userStory.soThat')}</strong>
						</p>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h3>{t('userStory.whyThisMattersLabel')}</h3>
						<p style={{ whiteSpace: 'pre-wrap' }}>{t('userStory.whyThisMatters')}</p>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h3>{t('userStory.acceptanceCriteria')}</h3>
						<ul>
							{(t('userStory.criteria', { returnObjects: true }) as string[]).map(
								(criterion: string, i: number) => (
									<li key={i}>{criterion}</li>
								)
							)}
						</ul>
					</div>

					<div>
						<h3>{t('userStory.mockData')}</h3>
						<p>{t('userStory.mockDataDesc')}</p>
					</div>
				</section>

				<section>
					<h2>{t('bonusChallenges.title')}</h2>
					<p>{t('bonusChallenges.subtitle')}</p>

					<div className="bonus-challenges">
						{[
							{
								key: 'challenge1',
								title: t('bonusChallenges.challenge1.title'),
								problem: t('bonusChallenges.challenge1.problem'),
								task: t('bonusChallenges.challenge1.task'),
								hint: t('bonusChallenges.challenge1.hint')
							},
							{
								key: 'challenge2',
								title: t('bonusChallenges.challenge2.title'),
								problem: t('bonusChallenges.challenge2.problem'),
								task: t('bonusChallenges.challenge2.task'),
								hint: t('bonusChallenges.challenge2.hint')
							}
						].map((challenge) => (
							<div key={challenge.key} className="bonus-challenge-card">
								<h3>{challenge.title}</h3>
								<p>
									<strong>Problem:</strong> {challenge.problem}
								</p>
								<p>
									<strong>Your Task:</strong> {challenge.task}
								</p>
								<p>
									<strong>💡 Hint:</strong> {challenge.hint}
								</p>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2>{t('currentState.title')}</h2>
					<p>{t('currentState.description')}</p>

					<div className="cards-grid">
						<div className="card-example">
							<h3>{t('currentState.userCard')}</h3>
							<p className="card-note">{t('currentState.userCardNote')}</p>
							<UserCard userId={1} />
						</div>

						<div className="card-example">
							<h3>{t('currentState.productCard')}</h3>
							<p className="card-note">{t('currentState.productCardNote')}</p>
							<ProductCard productId={1} />
						</div>

						<div className="card-example">
							<h3>{t('currentState.postCard')}</h3>
							<p className="card-note">{t('currentState.postCardNote')}</p>
							<div className="placeholder">{t('currentState.placeholder')}</div>
						</div>
					</div>
				</section>

				<section>
					<h2>{t('dataGlance.title')}</h2>
					<p>{t('dataGlance.description')}</p>
					<UserGrid />
					<ProductGrid />
				</section>
			</main>
		</div>
	);
};

export default App;
