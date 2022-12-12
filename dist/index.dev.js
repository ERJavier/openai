"use strict";

var express = require('express');

var dotenv = require('dotenv').config();

var port = process.env.PORT || 5009;
var app = express();
app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});