const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api', '/assets'],
    createProxyMiddleware({
      target: 'https://game-center-weikun.herokuapp.com/', //production server proxy
      // target: 'http://127.0.0.1:5000/', //local server proxy
      changeOrigin: true,
      secure: false,
    })
  );
};