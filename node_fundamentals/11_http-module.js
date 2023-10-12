const http = require("http");

//here is the example of the simple server setup using built in http module.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is our about page");
    res.end();
  } else {
    res.write(`<h1>Opps page not found</h1>
    <p>Go back to the home page</p>
    <a href='/'>Go back</a>`);
  }
});

server.listen("3001");
