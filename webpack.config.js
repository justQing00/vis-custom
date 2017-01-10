var webpack = require('webpack');
var path=require('path');

module.exports= {
  entry:{
    index:"./index.js",
  },
  output:{
    path: path.join(__dirname,'public'),
    publicPath: "/public/",
    filename: "vis-network.min.js",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }
}
