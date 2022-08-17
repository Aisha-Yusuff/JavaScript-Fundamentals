const express = require("express");
// create web application
const app = express();
// tell app to listen
// need to specify the port, port is the address of where the server will listen
const port = 3000;
app.listen(port, () => console.log("Listening at port 3000"));

// The purpose of the server : serve static content such as index.html

// To access the server on the local host
// Use express to host static files - index.html
// Static files in public directory because they can be seen by anyone
// app.use(express.static("public"));

// give the web application content without using html
app.get("/", (request, result) => {
  result.send("Hello, express!");
});

const counter = () => {
  let num = 0;
  for (let i = 0; i > 0; i++) {
    console.log(num++);
  }
};

app.post("/counter", (req, res) => {
  res.send("this is a post request");
});

app.get("/counter", (req, res) => {
  console.log(counter);
  res.send("this is a get request");
});
