/** @format */

module.exports = {
	trailingSlash: true,
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
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
}
