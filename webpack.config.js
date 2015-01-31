module.exports = {
  entry: ['./src/index.js', './src/js/init.js'],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx$/, loader: "jsx?harmony" }
      { test: /\.js$/, exclude: '/node_modules/', loader: "6to5-loader" }
    ]
  },
  devServer: {
    contentBase: "./dist",
  }
};
