const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});

    if(req.url === "/") {
      fs.readFile('./pages/main.html', (err, main) => {
        if(err) res.end();
        res.end(main);
      })
    } else if (req.url === '/posts') {
      fs.readFile('./pages/posts.html', (err, posts) => {
        if(err) res.end('Error');
        res.end(posts);
      })
    } else if (req.url === '/api/posts') {
      res.writeHead(200, { 'Content-Type': 'application/json'});
      fs.readFile('./db.json', (err, data) => {
        if (err) res.end('Error');
        res.end(data)
      });
      
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'});
      fs.readFile('./pages/404.html', (err, notExist) => {
        if(err) res.end('Error');
        res.end(notExist);
      })
    }
  });

  server.listen(port, '127.0.0.1');