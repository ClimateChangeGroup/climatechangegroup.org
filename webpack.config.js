const path = require('path');
const glob = require('glob');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const autoprefixer = require('autoprefixer');

const extractCSS = new ExtractTextPlugin('[name].[hash].css');

const output = {
  path: path.resolve(__dirname, 'docs'),
  filename: '[name].[hash].js',
};

module.exports = Object.assign(commonConfig, {
  output,
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.(s?css)$/,
      loader: extractCSS.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer()] },
          },
        ],
      }),
    }),
  },
  plugins: commonConfig.plugins.concat(extractCSS).concat(new PurifyCSSPlugin({
    paths: glob.sync(path.join(__dirname, 'src/index.html')),
    minimize: true,
    purifyOptions: {
      // added dynamically, so not detected in index.html
      whitelist: ['collapsing', 'floating-label-form-group-with-value', 'floating-label-form-group-with-focus'],
    },
  })),
});
