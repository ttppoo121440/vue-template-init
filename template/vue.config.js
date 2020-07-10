module.exports = {
  publicPath: "./",
  outputDir: "./dist",
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    disableHostCheck: true,
  },
  lintOnSave: process.env.NODE_ENV !== "production",
};
