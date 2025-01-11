const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Simulate an error (replace with actual request processing)
    // if (Math.random() < 0.5) throw new Error('Simulated error'); 

    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Request processing error:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
}).on('error', (err) => {
  console.error('Server error:', err);
});