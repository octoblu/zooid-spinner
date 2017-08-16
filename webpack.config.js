var path = require("path")
var webpack = require("webpack")
var UglifyJSPlugin = require("uglifyjs-webpack-plugin")

var plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  }),
  new UglifyJSPlugin(),
]

module.exports = {
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  entry: ["./src/index"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "Spinner",
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: /src/,
      },
    ],
  },
}
