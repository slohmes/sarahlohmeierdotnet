const { createServer } = require('node:http');

const hostname = '127.0.0.1';

const port = (!!process.env.PORT && process.env.PORT.length > 0) ? process.env.PORT : 8080;
console.log(`### process.env.PORT=${process.env.PORT}, port=${port}`)

const server = createServer((req, res) => {
  res.statusCode = 307; // redirect
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Location', 'https://slohmes.wordpress.com/');
  res.end('New site under construction, redirecting to old site for now.');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
