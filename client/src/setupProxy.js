// setupProxy.js
// createProxyMiddleware module
const { createProxyMiddleware } = require("http-proxy-middleware");
// module exports => app
module.exports = function (app) {
  // use api => /api[target[port] => http:localhost:[port]]
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000/",
      changeOrigin: true,
    })
  );
};
