import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/theme/default';
import { Provider } from 'react-redux';

import { store } from '../store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={defaultTheme}>
				<Provider store={store}>
					<GlobalStyle />
					<Component {...pageProps} />
				</Provider>
			</ThemeProvider>
		</SessionProvider>
	);
}
