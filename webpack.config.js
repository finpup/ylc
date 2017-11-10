const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  extensions: ['.js', '.jsx'],
  plugins: {
    new HtmlWebpackPlugin({
      title: "YLC 2018"
    })
  },
  modules: {
    [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "assets"),
      path.resolve(__dirname, "styles"),
      "node_modules"
    ]
  }
};
