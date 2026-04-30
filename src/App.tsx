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
					<p>
						<strong>{t('userStory.asA')}</strong> {t('userStory.iWantTo')}{' '}
						<strong>{t('userStory.soThat')}</strong>
					</p>

					<h3>{t('userStory.acceptanceCriteria')}</h3>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.displayPostInfo.title')}</h4>
						<ul>
							{(
								t('userStory.displayPostInfo.items', {
									returnObjects: true
								}) as string[]
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.interactivity.title')}</h4>
						<ul>
							{(
								t('userStory.interactivity.items', {
									returnObjects: true
								}) as string[]
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.componentStructure.title')}</h4>
						<ul>
							{(
								t('userStory.componentStructure.items', {
									returnObjects: true
								}) as string[]
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.layoutIntegration.title')}</h4>
						<ul>
							{(
								t('userStory.layoutIntegration.items', {
									returnObjects: true
								}) as string[]
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.mockDataAvailable')}</h4>
						<p>{t('userStory.mockDataDesc')}</p>
						<ul>
							{(
								t('userStory.mockDataTable', { returnObjects: true }) as string[]
							).map((row: string, i: number) => (
								<li key={i}>{row}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.fileStructure.title')}</h4>
						<p>{t('userStory.fileStructure.path')}</p>
						<ul>
							{(
								t('userStory.fileStructure.files', {
									returnObjects: true
								}) as string[]
							).map((file: string, i: number) => (
								<li key={i}>{file}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.componentProps.title')}</h4>
						<code>{t('userStory.componentProps.definition')}</code>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.suggestedLayout')}</h4>
						<pre style={{ padding: '1rem', overflow: 'auto' }}>
							{t('userStory.layoutDiagram')}
						</pre>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.validationChecklist')}</h4>
						<ul>
							{(
								t('userStory.validationItems', { returnObjects: true }) as string[]
							).map((item: string, i: number) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</div>

					<div style={{ marginBottom: '2rem' }}>
						<h4>{t('userStory.validation')}</h4>
						<p style={{ whiteSpace: 'pre-wrap' }}>{t('userStory.validationDesc')}</p>
					</div>
				</section>

				<section>
					<h2>{t('challenge.tasksTitle')}</h2>
					<ol>
						{(
							t('challenge.tasks', { returnObjects: true }) as Array<{
								title: string;
								description: string;
							}>
						).map((task, i: number) => (
							<li key={i}>
								<strong>{task.title}</strong> — {task.description}
							</li>
						))}
					</ol>
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
