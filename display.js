const express = require('express');
const request = require('request');
const app = express.Router();

const apiKey = 'c5426f6c81a0656ff52198f5dc2a0e06';

//render = render then send html to client
app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
});

//posting data
app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
});

module.exports = app;
