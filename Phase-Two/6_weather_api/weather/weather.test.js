const Weather = require("./weather");

describe("Weather", () => {
  it("gets the weather data fetched by the API class", () => {
    // mock the implementation of API class (mockedApi)
    const mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          weather: [
            {
              id: 801,
              main: "Clouds",
            },
          ],
          main: {
            temp: 290.71,
          },
          name: city,
        });
      },
    };

    //
    const hello = new Weather(mockedApi);
    hello.fetch("London");
    expect(hello.getWeatherData()).toEqual({
      weather: [
        {
          id: 801,
          main: "Clouds",
        },
      ],
      main: {
        temp: 290.71,
      },
      name: "London",
    });
  });
});
