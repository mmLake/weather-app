const express = require("express");
const displayRouter = require("./display");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//routes
app.use('/', displayRouter);

module.exports = app;
