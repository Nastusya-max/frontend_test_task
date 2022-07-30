const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dataJSON = require("./src/assets/dataset.json");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
        },
      };

module.exports = ({ develop }) => ({
  mode: develop ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      templateParameters: {
        dataset: dataJSON,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  ...devServer(develop),
});
