const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10000
						}
					}
				]
			}
		]
	},

	// Tell webpack teh root file of our server application
	entry: './client/index.js',
	// entry: ['babel-polyfill', './test.js'],

	// Tell webpack where to put the output file that's generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
}

// module.exports = merge(baseConfig, config);
module.exports = config;
