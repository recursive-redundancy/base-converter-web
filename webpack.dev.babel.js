const merge = require('webpack-merge');
const common = require('./webpack.common.babel.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
