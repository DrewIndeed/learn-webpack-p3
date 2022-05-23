const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. inject js to DOM
          'css-loader', // 2. css to js
          'sass-loader', // 1. sass to css
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
