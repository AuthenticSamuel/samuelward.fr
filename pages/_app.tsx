import type { AppProps } from "next/app";

import Layout from "components/layout/Layout";

import ThemeProvider from "contexts/Theme";

import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
