// 打包
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
})
