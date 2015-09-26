var path = require('path');
var webpack = require('webpack');

var babelSettings = {
  stage: 0,
  plugins: [
    'react-transform'
  ],
  'extra': {
     'react-transform': {
       'transforms': [{
         'transform': 'react-transform-hmr',
         'imports': ['react'],
         'locals': ['module']
       }, {
         'transform': 'react-transform-catch-errors',
         'imports': ['react', 'redbox-react']
       }]
     }
   }
};

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, '..'),
  entry: [
    'webpack-hot-middleware/client',
    './react/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '..', 'meteor', 'react-build-generated'),
    filename: 'app.js',
    publicPath: '/react-webpack-bundle/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
      require('postcss-nested-props'),
      require('precss'),
      require('autoprefixer')({ browsers: ['> 5%'] }),
    ];
  }
};
