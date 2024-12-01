// 公共部分的打包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer') // 添加postcss
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 打包后抽离css
const CopyWebpackPlugin = require('copy-webpack-plugin') // 静态资源复制到打包目录

// const VueLoaderPlugin=require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const rootDir = process.cwd()

module.exports = {
  entry: path.resolve(rootDir, 'src/index.ts'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'bundle.[contenthash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        // use: ['vue-loader'],
        use: 'vue-loader',
      },
      {
        test: /.(ts|tsx)$/, // 因为之后要适配 react，所以这里提前写入 tsx
        use: [
          {
            loader: 'thread-loader',
            options: {},
          },
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        include: path.resolve(rootDir, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*.js',
          context: path.resolve(rootDir, 'public/js'),
          to: path.resolve(rootDir, 'dist/js'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // new OptimizeCssPlugin()
    new webpack.optimize.SplitChunksPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // 代码分割类型：all全部模块，async异步模块，initial入口模块
    },
  },
}
