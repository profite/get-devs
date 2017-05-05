module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "public/js/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
}