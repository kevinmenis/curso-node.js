const fs = require('node:fs');

const stats = fs.statSync('./file.txt');

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbólico
    stats.size, // Tamaño del fichero
)