const webpack = require('webpack');

module.exports = {
  publicPath: "/VDay4Dubai/",
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'VDay4Dubai',
    themeColor: '#0096a7',
    msTileColor: '#0096a7',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#0096a7'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
