const http = require('http');
const httpProxy = require('http-proxy');

// test url: https://fantasy.premierleague.com/drf/leagues-classic-standings/464499
const proxy = httpProxy
  .createProxyServer({
    target: 'https://fantasy.premierleague.com/drf',
    changeOrigin: true
  })
  .listen(3000);

  proxy.on('proxyRes', (proxyRes, req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  });


console.log('Proxying on 3000');
