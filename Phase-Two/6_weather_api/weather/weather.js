const got = require("got");
const apiKey = require("./apiKey");
const WeatherApi = require("./weatherApi");
// let location = "";
// let apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;

class Weather {
  constructor(api) {
    this.api = WeatherApi;
    this.location = "";
  }
  fetch(city) {
    this.location = city;
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.location}&appid=${apiKey}`;
  }
  getWeatherData() {
    const hello = new this.api();
    const bye = hello.fetchWeatherData(this.location);
    return bye;
  }
}

const api = new WeatherApi();
const weather = new Weather(api);

weather.fetch("Tokyo");

weather.getWeatherData();

module.exports = Weather;
