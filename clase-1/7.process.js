// Argumentos de entrada
// console.log(process.argv);

// Controlar el proceso y su salida
// process.exit(0); 0 es el código de salida correcto
// process.exit(1); 1 es el código de salida incorrecto

// Podemos controlar eventos del proceso
/* process.on('exit', () => {
    // Limpiar recursos, cerrar conexiones, etc
}) */

// Podemos saber desde que carpeta estamos ejecutando el proceso
console.log(process.cwd());

// Variables de entorno
console.log(process.env.PEPITO);
