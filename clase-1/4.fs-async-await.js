// Asincrono secuencial

const { readFile } = require('node:fs/promises');

// IIFE (Immediately Invoked Function Expression)
// Una funcion invocada inmediatamente
(
    async () => {
        console.log('Leyendo el primer archivo...');
        const text = await readFile('./file.txt', 'utf-8');
        console.log('Primer texto: ', text);

        console.log('Hacer cosas mientras lee el archivo...');

        console.log('Leyendo el segundo archivo...');
        const secondText = await readFile('./file2.txt', 'utf-8');
        console.log('Segundo texto: ', secondText);
    }
)();
