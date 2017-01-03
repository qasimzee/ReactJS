module.exports = {
  staticFileGlobs: [
    'src/*.html'
  ],
  "runtimeCaching": [{
    "urlPattern": 'src/*.html',
    "handler": "cacheFirst"
  }],
  swFilePath: "service-worker.js"
};