const Html = require('html-webpack-plugin')
const {CleanWebpackPlugin: Clean} = require('clean-webpack-plugin')
const path = require('path')


/**@type {import('webpack').Configuration} */
const options = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'output')
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './output',
    hot: true,
    port: 3300
  },
  plugins: [
    new Clean(),
    new Html({title: 'D3 learning', filename: path.resolve(__dirname, 'output', 'index.html')})
  ]
}

module.exports = options
