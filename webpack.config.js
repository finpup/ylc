const path = require('path');
const cssFilename = 'static/css/style.css';
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
  title: 'YLC 2018',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  }
})
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {

  return {
    entry: {
      vendor: ['react', 'react-dom', 'normalize.css'],
      app: './src/index.jsx',
    },
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: [".jsx", ".js", 'scss'],
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'styles'),
        path.resolve(__dirname, 'src'),
        'node_modules',
        ],
    },
    module: {
      rules: [
        // {
        //   test: /\.jsx?$|\.js$/,
        //   exclude: ['/node_modules/'],
        //   enforce: 'pre',
        //   loader: 'eslint-loader',
        // },
        {
          test: /\.jsx?$|\.js$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "src"),
          loader: 'babel-loader',
        },
        {
          test: /\.css$|\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }),
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.png$/,
          loader: 'url-loader',
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/font-woff',
        },
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/octet-stream',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity,
      }),
      HtmlWebpackPluginConfig,
      new ExtractTextPlugin({
        filename: cssFilename,
      })
    ]
  }
}
