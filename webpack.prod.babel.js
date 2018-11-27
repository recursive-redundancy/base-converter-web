const merge = require('webpack-merge');
const common = require('./webpack.common.babel.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
    ]
  },
  optimization: {
    /* minify css using optimize-css-assets-webpack-plugin
    * it overrides default js minifier, so must set js minify
    * with uglifyjs-webpack-plugin too
    */
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }, 
  plugins: [
  ],
});
