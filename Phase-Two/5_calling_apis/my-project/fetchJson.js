const got = require("got");

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchJson =
  (url,
  (response) => {
    const receivedResponse = JSON.parse(response.body);
    console.log(receivedResponse);
  });

got("https://jsonplaceholder.typicode.com/todos").then(fetchJson);
