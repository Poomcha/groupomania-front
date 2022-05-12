module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/groupomania-front" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/style/global.scss";`,
      },
    },
  },
};
