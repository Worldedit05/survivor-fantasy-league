"use strict";

const express = require(`express`);
const path = require(`path`);
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if (!isProduction) {

  let bundle = require('./server/bundle.js');
  bundle();

  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

}

proxy.on('error', (e) => {
  console.log('Could not connect to proxy, please try again...');
});

app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
