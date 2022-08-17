const got = require("got");

const url = "https://api.github.com/repos/sinatra/sinatra";

const fetchRepositoryInfo =
  (url,
  (response) => {
    const receivedResponse = JSON.parse(response.body);
    console.log(receivedResponse);
  });

got(url).then(fetchRepositoryInfo);

// fetchRepositoryInfo("sinatra/sinatra", (receivedResponse) => {
//   console.log(receivedResponse);
// });
