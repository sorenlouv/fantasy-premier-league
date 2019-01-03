const http = require('http');
const httpProxy = require('http-proxy');

// test url: https://fantasy.premierleague.com/drf/leagues-classic-standings/464499
httpProxy
  .createProxyServer({
    target: 'https://fantasy.premierleague.com',
    changeOrigin: true
  })
  .listen(3000);

console.log('Proxying on 3000!');
