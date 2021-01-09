const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: '[name]-[hash].js', // 使用 [name] 来引用 entry 名称，在这里即为 main
    // path: path.join(__dirname, '/dist/[hash]'),
    // 路径中使用 hash，每次构建时会有一个不同 hash 值，可以用于避免发布新版本时浏览器缓存导致代码没有更新
    // 文件名中也可以使用 hash
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, './src'),
        ],
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'public/index.html', // 配置文件模板
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 9000
  }
}