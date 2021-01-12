const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const publicPath = isProd ? './dist' : ''
const indexPath = isProd ? 'G:/project/smiledpeace.github.io/index.html' : 'index.html'
module.exports = {
  publicPath,
  indexPath,
  configureWebpack: config => {
    // 别名配置
    config.resolve.alias = {
      '@': resolve('src'),
      '@const': resolve('src/utils/const'),
      '@util': resolve('src/utils/util'),
      '@config': resolve('src/utils/config'),
      '@bus': resolve('src/utils/bus.js'),
      '@components': resolve('src/components')
    }
  },
  devServer: {
    port: '18888'
  }
}
