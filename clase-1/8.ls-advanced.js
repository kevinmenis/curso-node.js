const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

const folder = process.argv[2] ?? '.';
// readdir : leer un directorio
/* 
[
    '/home/kevin/.nvm/versions/node/v16.14.2/bin/node',
    '/home/kevin/kev/curso-node-js/8.ls-advanced.js',
    folder que le escribo
]
*/

async function ls (folder) {
    let files;

    try {
        files = await fs.readdir(folder);
    } catch {
        console.error(pc.red(`No se ha podido leer el directorio ${folder}`));
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath); // stat: información del archivo
        } catch {
            console.error(`No se ha podido leer el archivo ${filePath}`);
            process.exit(1);    
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size.toString();
        const fileModified = stats.mtime.toLocaleString();

        // padEnd : añade espacios al final de la cadena para que tenga una longitud de 20 caracteres
        return `${pc.magentaBright(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
    })

    const filesInfo = await Promise.all(filesPromises);

        filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder)