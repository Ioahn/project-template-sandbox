import path from "path";
import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { fileURLToPath } from "url";

import webpackConfig from "./webpack.config.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const devServerOptions = {
  static: {
    directory: path.join(dirname, "./build"),
  },
  client: {
    progress: true,
  },
  port: process.env.PORT || "8000",
  host: "0.0.0.0",
  open: true,
  hot: true,
  liveReload: false,
};

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log("Starting server...");

  await server.start();
};

runServer();
