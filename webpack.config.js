const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // dist can be any name
    filename: 'main.js', // main can be any name
  },
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
};
