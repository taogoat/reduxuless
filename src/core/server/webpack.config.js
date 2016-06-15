var webpack = require('webpack');

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
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ],
};
