const http = require('http');

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    if(req.url === "/") {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
      res.end("Strona główna");
    } else if (req.url === '/posts') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
      res.end("posty");
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'});
      res.end(`${res.statusCode}`);
    }
  });

  server.listen(port, '127.0.0.1');