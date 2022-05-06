const path = require("path");
const glob = require("glob");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const clientConfig = {
  target: "web",
  devtool: "source-map",
  entry: [
    "./src/index.ts"
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
            configFile: 'tsconfig.json',
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@iota/streams/node": path.resolve(__dirname, "../../node_modules/@iota/streams/web/streams.js")
    },
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    filename: "anchors-web.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "module"
  },
  experiments: {
    topLevelAwait: true,
    outputModule: true,
    syncWebAssembly: true
  },
};

module.exports = [clientConfig];