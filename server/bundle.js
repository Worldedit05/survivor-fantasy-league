"use strict";

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./../webpack.config.js');
const path = require('path');
const fs = require('fs');
const mainPath = path.resolve(__dirname, '..', 'app', 'main.js');

module.exports = () => {

  let bundleStart = null;
  let compiler = Webpack(webpackConfig);

  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  let bundler = new WebpackDevServer(compiler, {

    publicPath: '/build/',

    // Configure hot replacement
    hot: true,

    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', () => {
    console.log('Bundling project, please wait...');
  });

};
