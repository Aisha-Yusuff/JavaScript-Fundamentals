const got = require("got");
const apiKey = require("./apiKey");
// let city = "London";
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

class WeatherApi {
  constructor() {
    this.apiUrl = ``;
  }

  fetchWeatherData(city) {
    let location = city;
    this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;
    got(this.apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      console.log(weatherData);
    });
  }
}

const api = new WeatherApi();

api.fetchWeatherData("Amsterdam", (weatherData) => {
  console.log(weatherData);
});

module.exports = WeatherApi;
