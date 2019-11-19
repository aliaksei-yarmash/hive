const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: ['./src/index.js', './src/index.html', './src/styles.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/styles.css' },
    ]),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
};

module.exports = config;
