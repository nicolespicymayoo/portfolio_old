var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var babelSettings = {
  stage: 0
};

module.exports = {
  devtool: null,
  context: path.join(__dirname, '..'),
  entry: './react/index',
  output: {
    path: path.join(__dirname, '..', 'meteor', 'react-build-generated'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        query: babelSettings,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css?$/,
        loader: 'style!css!postcss',
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('postcss-input-style'),
      require('autoprefixer')({ browsers: ['> 5%'] }),
    ];
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
};
