const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave:false, //关闭语法检查
  publicPath: './',
  devServer: {
  
    open: true,
  //   proxy: {
  //     '/api': {
  //         target: '',
  //         changeOrigin: true,
  //         pathRewrite: {
  //             '^/api': ''
  //         }
  //     }
  // },
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')); // key,value自行定义，比如.set('@@', resolve('src/components'))

    config
      .plugin('html')
      .tap(args => {
        args[0].title= '教学建设'
        return args
      })
  },
}
