"use strict";
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");
const httpProxy = require('http-proxy');
const Promise = require("bluebird");


// Models
const users = require('./api/routes/users');

// Proxy dev server
const proxy = httpProxy.createProxyServer();
const app = express();

//Creating production and dev ports
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

const config = isProduction ? require('./config/config.sample.js') : require('./config/config.js');

// Connect to MongoDB
const mongoLocalConn = `mongodb://${config.mongo.hostname}:${config.mongo.port}/${config.mongo.database}`;
const mongoConnection = process.env.MONGODB_URI || mongoLocalConn;

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use('/users', users);

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

// mongoose.Promise = Promise;

mongoose.connect(mongoConnection, () => {
  console.log('Mongo connection successful');
});

const db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
