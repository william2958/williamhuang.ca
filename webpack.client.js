const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							[
								'babel-plugin-styled-components',
								{ "ssr": true, "displayName": true, "preprocess": false }
							]
						]
					}
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
				loader: 'file-loader?name=[name].[ext]'
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

	// Tell webpack teh root file of our client application
	// entry: './client/index.js',
	entry: ['@babel/polyfill', './client/index.js'],

	// Tell webpack where to put the output file that's generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};

// module.exports = merge(baseConfig, config);
module.exports = config;
