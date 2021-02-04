const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#indexpath
  publicPath: '/',
  outputDir: 'dist', // 生产环境构建文件的目录 Default: 'dist'
  assetsDir: 'assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。Default: 'index.html'
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  lintOnSave: false, // eslint-loader 在开发和生产构建下都会被启用，不需要每次保存后，执行Lint检查
  filenameHashing: true,
  devServer: {
    open: true, // 在服务器启动后打开浏览器。将其设置true为打开默认浏览器  ,open: 'Google Chrome'
    // eslint 相关
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '': {
        // target: 'https://alltest.fireflyjk.com/api', //
        target: 'http://192.168.3.12:8084/', //
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/', /// /重写路径
          '^/api/remove/path': '/path', // 删除基本路径
        },
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/style/variable.scss";
          @import '@/style/mixins.scss';
        `
      },
    }
  },
  chainWebpack(config) {
    // 修改装载程序的选项
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // console.log(config)  控制台会输出内容
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
};
