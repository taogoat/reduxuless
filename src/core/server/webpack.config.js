var webpack = require('webpack')
var jsonLoader = require('json-loader')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client',
          './src/core/client',
  ],

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
    publicPath: '/public/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loader: {
      test: /\.json?$/,
      loader: jsonLoader
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ],
}
