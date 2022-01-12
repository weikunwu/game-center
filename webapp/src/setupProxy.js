const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://game-center-weikun.herokuapp.com/',
      changeOrigin: true,
      secure: false,
    })
  );
};