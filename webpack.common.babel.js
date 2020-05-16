const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: resolve('src'),
  entry: './main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!dpm-base$)/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": 
              [ "@babel/preset-env" ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [ 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
      title: 'Base Converter | by Daniel Morgan',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};