/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'static'),
  mode: process.env.NODE_ENV,
  entry: './js/index.ts',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
      path: false,
      assert: require.resolve('assert/')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'static/html/index.html'),
      nodeModules: false
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'static/images'),
          to: path.resolve(__dirname, 'dist')
        }
        // {
        //   from: path.resolve(__dirname, 'static/html'),
        //   globOptions: {
        //     ignore: ['**/index.html']
        //   },
        //   to: path.resolve(__dirname, 'dist')
        // }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    port: process.env.PORT || 3000,
    open: true,
    host: 'localhost',
    hot: process.env.NODE_ENV === 'development',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader?name=./fonts/[name].[ext]']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: ['file-loader?name=./images/[name].[ext]']
      }
    ]
  }
};
