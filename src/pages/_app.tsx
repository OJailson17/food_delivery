import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/theme/default';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
}
