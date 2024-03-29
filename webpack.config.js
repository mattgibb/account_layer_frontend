module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: '/node_modules/', loader: "jsx?harmony" }/**,
      { test: /\.js$/, exclude: '/node_modules/', loader: "6to5-loader" }*/
    ]
  }
};
