'use strict'
var express = require('express');
// var app = express();

var config = require('./config/config');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

var app = require('./config/express');
/* eslint-disable no-unused-vars */
var db = require('./config/sequelize');

// listen on port config.port
app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

module.exports = app;
