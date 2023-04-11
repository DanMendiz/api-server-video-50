//creating app for server
const express = require('express');

const app = express();

require('./middleware')(app);
require('./db');
require('./routes')(app);

module.exports = app;
