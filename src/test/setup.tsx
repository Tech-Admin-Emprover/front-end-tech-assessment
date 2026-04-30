import '@testing-library/jest-dom';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// Ensure i18n is initialized for tests
if (!i18n.isInitialized) {
	i18n.init();
}

// Custom render function that wraps with i18n provider
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
	render(ui, {
		wrapper: ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>,
		...options
	});

export * from '@testing-library/react';
export { customRender as render };
