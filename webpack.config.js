const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /.js$/, use: 'babel-loader' },
    ],
  },
};
