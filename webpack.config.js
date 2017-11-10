const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'YLC 2018',
      filename: 'static/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "assets"),
        path.resolve(__dirname, "styles"),
        "node_modules"
    ]
  }
};
