const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin=require("vue-loader/lib/plugin")
import { VueLoaderPlugin } from 'vue-loader';
import { DefinePlugin, Configuration as WebpackConfiguration } from 'webpack';
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js',
    clean:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new VueLoaderPlugin(),
    /**
     * 使用 webpack 自带的 DefinePlugin 定义全局变量
     * __VUE_OPTIONS_API__、__VUE_PROD_DEVTOOLS__ 为 true 时候可以使用 Chrome 的 Vue Devtools 插件
     */
    new DefinePlugin({
      __VUE_OPTIONS_API__: isDev,
      __VUE_PROD_DEVTOOLS__: isDev,
    }),
  ],
  module: {
    rules: [
      // 处理 Vue
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        // use: ['vue-loader'],
        use:"vue-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              // 需要让 ts-loader 识别 vue SFC 中的 ts 代码
              appendTsSuffixTo: ['\\.vue$'],
            },
          },
        ],
        // use: 'ts-loader',
        // options: {
        //   appendTsSuffixTo: [/\.vue$/], // 允许在 .vue 文件中使用 TypeScript
        // },
      },
      // 加载样式
      {
        test: /\.css$/i,
        // use: [
        //   // 使用 vue-style-loader 替换掉 style-loader
        //   isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   'postcss-loader',
        // ],
        use:["vue-style-loader","css-loader"]
      },
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js'],
    alias: { // 给固定路径起别名
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    port: '8080', // 开启的端口号，一般是 8080
    hot: true, // 是否启用 webpack 的 Hot Module Replacement 功能，也就是模块热替换
    // stats: 'errors-only', // 终端仅打印 error
    compress: true, // 是否启用 gzip 压缩
  },
  optimization: {
    minimize: false
  },
}
