const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './public/background.js',
  output: {
    filename: 'background.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new Dotenv()
  ]
};