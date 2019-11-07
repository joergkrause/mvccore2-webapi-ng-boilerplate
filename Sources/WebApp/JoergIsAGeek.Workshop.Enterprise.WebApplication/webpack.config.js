﻿const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
// Node
const path = require('path');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: '@ngtools/webpack'
          }
        ]
      },
      /* Embed files. */
      { 
        test: /\.(html|css)$/, 
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'bundle.[name].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          comments: false,
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
      { from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'assets/styles' },
      { from: 'node_modules/font-awesome/css/font-awesome.css', to: 'assets/styles' },
      { from: 'node_modules/font-awesome/fonts', to: 'assets/fonts' }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      output: path.resolve(__dirname, 'wwwroot'),
      inject: 'body'
    }),
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: './src/app/app.module/#AppModule', //#AppModule
      sourceMap: true
    })
  ]
};