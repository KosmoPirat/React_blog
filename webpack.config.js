const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: "",
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

    plugins: [
        new CopyPlugin([
            {
                from: 'src/index.html',
                to: './',
                toType: 'dir'
            }
        ])
    ],
    devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'docs')
  }
};