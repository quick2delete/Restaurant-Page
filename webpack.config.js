const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  // devServer: {
  //   port: 8080
  // },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
        exclude: path.resolve(__dirname, "src/index.html"),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant App",
      filename: "index.html",
      template: "./src/index.html",
      inject: true,
      chunks: ["bundle"],
    }),

    // new HtmlWebpackPlugin({
    //   filename: "menu.html",
    //   template: "./src/menu.html",
    //   inject: true,
    //   chunks: ["bundle"],
    // }),

    // new HtmlWebpackPlugin({
    //   filename: "contact.html",
    //   template: "./src/contact.html",
    //   inject: true,
    //   chunks: ["bundle"],
    // }),
  ],
};
