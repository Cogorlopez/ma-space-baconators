const webpack = require('webpack')
const common = require('./common.webpack.js')

const development = {
  mode: 'development',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './client/index.jsx'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = { ...common, ...development }
