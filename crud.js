const http = require('http');
cosnt fs = require('fs')
const crudOperaions= require('./userDatafunctions');

const port = process.env.PORT || 8030;
let body = '';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/JSON');
  res.end("Hello World")
});

server.listen(port, () => {
  console.log(`Server running at port no. :${port} `);
});