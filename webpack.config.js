const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';

	console.log('env', env);
	return {
		entry: './src/app.js',
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'public', 'dist')
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtract.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		plugins: [ new MiniCssExtract() ],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	};
};
