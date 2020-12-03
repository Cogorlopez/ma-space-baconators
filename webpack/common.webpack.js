const config = require('config')
// const path = require('path')

const commonConfig = {
  entry: {
    app: [
      './client/index.jsx'
    ]
  },

  mode: 'development',

  output: {
    publicPath: config.BASE_PATH
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  }
}
module.exports = commonConfig
