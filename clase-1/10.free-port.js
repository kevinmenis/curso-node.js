// Una pequeña aplicacion que nos va a mostrar un puerto libre
const net = require('node:net'); // Protocolo net, es mas rapido que http porque no tiene que enviar tantas cabeceras

// findAvailablePort : es una funcion que busca un puerto libre
// desiredPort : es el puerto que queremos usar, si no esta libre, se busca otro
// resolve (resolver) : es el callback que se ejecuta cuando se encuentra un puerto libre
// reject (rechazar) : es el callback que se ejecuta cuando hay un error
// server.listen : es el metodo que se usa para escuchar un puerto
// server.close : es el metodo que se usa para cerrar el servidor
// server.on : es el metodo que se usa para escuchar eventos
// server.address : es el metodo que se usa para obtener la direccion del servidor
function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.listen(desiredPort, () => {
            const { port } = server.address();
            server.close(() => {
                resolve(port)
            })
        })
        
        server.on('error', (err) => {
            if (err.code == 'EADDRINUSE') {
                findAvailablePort(desiredPort + 1).then((port) => {
                    resolve(port)
                })
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort };