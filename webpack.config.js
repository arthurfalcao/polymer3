/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [{ test: /\.(ts)?$/, exclude: /node_modules/, use: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(
            path.resolve(
              __dirname,
              'node_modules/@webcomponents/webcomponentsjs/'
            ),
            '*.js'
          ),
          to: 'webcomponentsjs/[name][ext]'
        }
      ]
    })
  ]
}
