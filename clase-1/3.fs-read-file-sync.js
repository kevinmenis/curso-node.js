const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log('Primer texto: ', text);

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFile('./file2.txt', 'utf-8')
console.log('Segundo texto: ', secondText);