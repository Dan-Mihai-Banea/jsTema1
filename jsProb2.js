// PROBLEMA 2

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

let numar;
let i = 1;
let factorial = 1;

rl.question('Introduceti numarul al carui factorial doriti sa-l aflati: ', (numar) => {

    while (i <= numar) {
        factorial = factorial * i;
        i++;
    }

    console.log('Factorialul numarului ' + numar + ' ESTE ' + factorial);
 
    rl.close();
});

// MERGE!!!