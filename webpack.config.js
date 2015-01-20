module.exports = {
  entry: ['./src/index.js', './src/js/app.js'],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  },
  devServer: {
    contentBase: "./dist",
  }
};
