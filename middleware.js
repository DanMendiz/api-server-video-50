const express = require('express');

module.exports = function (app) {
  //express middleware using express static method
  app.use(express.static('public'));
  console.log('middleware console.log');

  app.use(express.json()); //The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
};
