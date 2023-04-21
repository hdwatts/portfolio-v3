/** @format */

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer], {
	trailingSlash: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./helpers/generate-sitemap')
		}
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		config.resolve.extensions = [
			...(config?.resolve?.extensions || []),
			...['.js', '.jsx', '.ts', '.tsx'],
		]
		config.resolve.alias = {
			...(config?.resolve?.alias || {}),
			'~': __dirname,
		}
		return config
	},
})
