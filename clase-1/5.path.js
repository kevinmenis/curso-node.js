const path = require('node:path');

// Barra separadora de carpetas segun SO
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base);

// nombre del fichero sin la extension
const fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(fileName);

const extension = path.extname('my.super.image.jpg');
console.log(extension);