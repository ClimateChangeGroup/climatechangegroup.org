const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }, {
      test: /\.html$/,
      loader: 'html-loader?name=[name].[ext]',
    }, {
      test: /\.(jpe?g|png|gif)$/,
      exclude: /(node_modules)/,
      loaders: [
        'url-loader?limit=10000',
        'image-webpack-loader?bypassOnDebug',
      ],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'windows.jQuery': 'jquery',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html',
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
      },
    }),
    new FaviconsWebpackPlugin('./src/img/climate_change_group_logo.png'),
    new BabiliPlugin(),
  ],
};
