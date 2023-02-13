const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; //usually use this port for dev

const server = http.createServer((req, res) => { //the fat arrow (=>) function
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // backtik (`) allows you to place variables right in the string using ${variable} notation
});