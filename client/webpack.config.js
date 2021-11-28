import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsConfigPathResolverPlugin from "tsconfig-paths-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import { fileURLToPath } from "url";
import chalk from "chalk";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
  entry: path.resolve(dirname, "src/index.tsx"),
  output: {
    filename: "[name].bundle.js",
    clean: true,
    publicPath: "/",
    path: path.resolve(dirname, "./build"),
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsConfigPathResolverPlugin()],
  },
  devtool: "inline-source-map",
  ignoreWarnings: [/Failed to parse source map/],
  stats: "minimal",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(dirname, "public", "index.html"),
    }),
    new ProgressBarPlugin({
      format:
        "  build " +
        chalk.yellow.bold(" [:bar] ") +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
    }),
  ],
};
