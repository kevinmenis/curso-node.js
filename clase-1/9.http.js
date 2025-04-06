const http = require('node:http'); // Protcolo http
const { findAvailablePort } = require('./10.free-port.js');

const server = http.createServer((request, response) => {
    console.log('Request received');
    response.end('Hello, world!'); // Cuand recibo una peticion, le respondo con un mensaje
});

findAvailablePort(5437)
    .then((port) => {
        server.listen(port, () => {
            console.log(`Server listening on port: http://localhost:${port}`);
            console.log('Server started');
        })
    }) 

