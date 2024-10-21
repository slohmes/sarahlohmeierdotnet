const { createServer } = require('node:http');

const hostname = '0.0.0.0';

const port = (!!process.env.PORT && process.env.PORT.length > 0) ? process.env.PORT : 8080;
console.log(`### process.env.PORT=${process.env.PORT}, port=${port}`)

const server = createServer((req, res) => {


  if (req.method === 'GET' && req.url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Yep that works!');
  } else {
    
    res.writeHead(307, {  // redirect
      'Content-Type': 'text/plain',
      'Location': 'https://slohmes.wordpress.com/'
    });
    res.end('New site under construction, redirecting to old site for now!');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
