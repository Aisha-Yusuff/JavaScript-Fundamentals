const got = require("got");
const apiKey = require("./apiKey");
const city = "London";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log("Requesting weather data");

// got(apiUrl).then((response) => {
//   weatherData = JSON.parse(response.body);
//   console.log(weatherData);
//   console.log(weatherData.main.temp);
//   console.log(weatherData.weather[0].main);
// });

console.log("Requesting weather data");

class WeatherApi {
  constructor() {}
  fetchWeatherData(city, callback) {
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      console.log(weatherData);
      console.log(weatherData.main.temp);
      console.log(weatherData.weather[0].main);
    });
  }
}

// const api = new WeatherApi();
// api.fetchWeatherData("London", (weatherData) => {
//   console.log(weatherData);
// });

class Weather {
  constructor(api) {
    this.api = api;
    this.apiUrl = ``;
  }

  fetch(location) {
    const city = location;
    this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=efecccfce45c358a38eb0882fc12005e`;
  }

  getWeatherData() {
    got(this.apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      console.log(weatherData);
      console.log(weatherData.main.temp);
      console.log(weatherData.weather[0].main);
    });
  }
}

const api = new WeatherApi();
const weather = new Weather();

weather.fetch("Bristol");

weather.getWeatherData();
