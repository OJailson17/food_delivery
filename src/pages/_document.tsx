import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='anonymous'
					/>
					{/* eslint-disable-next-line @next/next/no-page-custom-font */}
					<link
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
						rel='stylesheet'
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
