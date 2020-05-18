'use strict'
var express = require('express');
var app = express();

var config = require('./config/config');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

var app = require('./config/express');
/* eslint-disable no-unused-vars */
var db = require('./config/sequelize');

// listen on port config.port
app.listen(config.port, () => {
  console.info(`\n#####################################################`);
  console.info(`server started on port ${config.port} (${config.env})`);
  console.info(`#####################################################\n`);
});

module.exports = app;
