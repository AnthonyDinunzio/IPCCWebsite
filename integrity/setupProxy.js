const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/submit-form', // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // Your Flask backend URL
      changeOrigin: true,
    })
  );
};
