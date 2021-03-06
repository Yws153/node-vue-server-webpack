var webpack = require('webpack')
var config = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.devtool = 'source-map'

config.output.filename = '[name].js'
config.output.chunkFilename = '[id].[hash:8].js'

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin("styles.css",{allChunks: true}),
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "[name].js",
    minChunks: Infinity,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

module.exports = config