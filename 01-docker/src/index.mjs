import http from 'node:http';

const host = '0.0.0.0';
const port = 3333;

const listener = (request, response) => {
  response.end('Hello, Evandro!!');
}

const server = http.createServer(listener);

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
