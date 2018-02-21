const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE.ENV = process.env.ENV = 'development';

module.exports = {
  // point of entry for webpack, relative path - -webpack executes from root
  entry: {
    'ng1': './public/index.ts'
  },

  output: {
    path: helpers.root('dist/dev'), // will build /dist/dev in the rrot directory
    publicPath: '/',  // important if using webpack devserver
    filename: '[name].bundle.js', // uses entry proprty 'ng1' to output ng1.bundle.js 
    chunkFilename: '[id].chunk.js'  // users commonChunkPlugin to output compiled webpack runtime
  },

  // set up your file extensions, check for ts first then js
  resolve: {
    extensions: ['.ts', '.js']
  },
  // set up our library module loaders
    // awesome-typescript-loader : translate js to ts
    // angular2-template-loader: translate templateUrls to a require statement ...
    // ...and inline the templates
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loaders: 'html-loader'
      }
    ]
  },

  // Set up some plugins
    // CommonChunkPlugin - plugin to store common modules in cache to speed up loading
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    }),

    // setup webpack to output sourcemap files
    new webpack.SourceMapDevToolPlugin({
      "filename": "[file].map[query]",
      "moduleFilenameTemplate": "[resource-path]",
      "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
      "sourceRoot": "webpack:///"
    }),
    // this plugin takes a template, HTML and any bundles webpack creates, and add references...
    //  ... to those bundles to the template html file.
    new HtmlWebpackPlugin({
      template: 'config/index.html'
    }),
    // define the current environment variables here
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
}