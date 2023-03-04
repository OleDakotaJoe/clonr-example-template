const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const dev = argv.mode === "development";
  const prod = argv.mode === "production";

  const plugins = [
    new HtmlWebpackPlugin({
      title: "ChainWords",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/public" }],
    }),
  ];

  if (prod) {
    plugins.push(
      new WorkboxPlugin.GenerateSW({
        maximumFileSizeToCacheInBytes: 5 * 1000000,
      })
    );
  }

  if (dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    entry: ["./src/index.js"],
    devtool: dev ? "inline-source-map" : "nosources-source-map",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
            ],
          },
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[hash]-[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      alias: {
        react: path.resolve("./node_modules/react"),
        "react-dom": path.resolve("./node_modules/react-dom"),
      },
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "bundle.js",
    },
    devServer: {
      port: 3000,
      static: "./src/public",
      historyApiFallback: true,
      hot: false,
    },
    plugins,
  };
};
