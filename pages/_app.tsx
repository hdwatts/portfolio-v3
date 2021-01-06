/** @format */

import React from 'react'
import Head from 'next/head'
//import { globals } from '../globals'
import Header from '../components/header'
import Footer from '../components/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false
import '../styles/main.scss'
import MetaImg from '~/public/meta/meta-img.png'
import { DefaultSeo } from 'next-seo'

const globals = {
	googleAnalyticsId: null,
}

const App: React.FC = ({ Component, pageProps, router }: any) => (
	<React.Fragment>
		<Head>
			{/* Google Analytics */}
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

			{/* Viewport */}
			<meta name='viewport' content='width=device-width, initial-scale=1' />

			{/* Favicons */}
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

			{/* Theme/Tile Colors */}
			<meta name='msapplication-TileColor' content='#2e3440' />
			<meta name='theme-color' content='#2e3440' />
		</Head>
		<DefaultSeo
			titleTemplate='%s | Howard Dean Watts'
			description="Heya! I'm Howard Dean Watts! Welcome to my website!"
			openGraph={{
				type: 'website',
				locale: 'en_IE',
				url: 'https://www.hdwatts.com',
				site_name: 'HDWatts',
				title: 'Welcome',
				images: [
					{
						url: `https://hdwatts.com${MetaImg.src}`,
						width: 1000,
						height: 750,
					},
				],
			}}
		/>
		<Header {...pageProps} />
		<Component {...pageProps} key={router.route} />
		{!pageProps.isFullscreen && <Footer {...pageProps} />}
	</React.Fragment>
)

export default App
