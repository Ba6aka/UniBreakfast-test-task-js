'Use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: 'C:/MAMP/htdocs/UniBreakfast-test-task-js/src/Js/script.js',
  output: {
    filename: 'bundle.js',
    path: 'C:/MAMP/htdocs/UniBreakfast-test-task-js/src/Js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
