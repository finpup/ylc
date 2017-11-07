const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  extensions: ['.js', '.jsx'],
  plugins: {
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "YLC 2018"
    })
  }
};
