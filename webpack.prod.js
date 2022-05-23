const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), // dist can be any name
    filename: 'main.[contenthash].js', // main can be any name
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]',
  },
});
