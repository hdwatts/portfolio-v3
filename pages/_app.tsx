/** @format */

import React from 'react'
import Head from 'next/head'
//import { Footer } from '../components/Footer'
//import { globals } from '../globals'
//import { Header } from '../components/Header'
import 'bulma/css/bulma.css'
import '../styles/main.scss'

const globals = {
	googleAnalyticsId: null,
}

const App: React.FC = ({ Component, pageProps }: any) => (
	<div className='container'>
		<Head>
			{globals.googleAnalyticsId && (
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
				></script>
			)}
			{globals.googleAnalyticsId && (
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('globals', '${globals.googleAnalyticsId}');
            `,
					}}
				></script>
			)}
			<script
				defer
				src='https://use.fontawesome.com/releases/v5.14.0/js/all.js'
			></script>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicons/favicon-32x32.png'
			/>
			<link rel='icon' sizes='16x16' href='/favicons/favicon.ico' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicons/favicon-180x180.png'
			/>
			<link
				rel='apple-touch-icon'
				href='/favicons/favicon-152x152.png'
				sizes='152x152'
			/>
			<link rel='icon' href='/favicons/favicon-128x128.png' sizes='128x128' />
			<link rel='icon' href='/favicons/favicon-192x192.png' sizes='192x192' />
			<link rel='icon' href='/favicons/favicon-228x228.png' sizes='228x228' />

			<link
				rel='shortcut icon'
				sizes='196x196'
				href='/favicons/favicon-196x196.png'
			/>
			<meta name='msapplication-TileColor' content='#2e3440' />
			<meta name='theme-color' content='#2e3440' />
		</Head>
		{/* <Header /> */}
		<h1 className='title'>Hello World</h1>
		<Component {...pageProps} />
		{/* <Footer /> */}
	</div>
)

export default App
