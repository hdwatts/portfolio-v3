/** @format */

const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withOptimizedImages, withBundleAnalyzer], {
	trailingSlash: true,
	webpack: config => {
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
	webpackDevMiddleware: config => ({
		watchOptions: {
			poll: 1000,
			aggregateTimeout: 300,
		},
	}),
})
