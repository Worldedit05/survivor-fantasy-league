const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'app', 'main.js');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    // For hot style updates to components
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',

    // app/main.js
    mainPath
  ],
  output: {
    // Where the bundle.js will build to
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {

    loaders: [

      {
        test: /\.js$/,
        include: /app/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        },
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [new Webpack.HotModuleReplacementPlugin()]
};
