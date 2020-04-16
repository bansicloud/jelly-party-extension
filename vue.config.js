// vue.config.js
module.exports = {
  publicPath: "",
  assetsDir: "",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Jelly-Party App"
    }
  },
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: {
    entry: {
      contentScript: "./src/contentScript/contentScript.js"
    },
    devtool: "source-map"
  }
};
