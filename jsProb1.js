// PROBLEMA 1

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

let numarPrim;
let j = 0;

rl.question('Introduceti numarul pe care doriti sa-l verificati daca este prim: ', (numarPrim) => {
    for (let i = 1; i <= numarPrim; i++) {
        if (numarPrim % i == 0) {
            j++;
        } 
    }

    if (j == 2) {
        console.log(`Numarul ${numarPrim} ESTE prim!`);
    } else {
        console.log(`Numarul ${numarPrim} NU ESTE prim...`);
    }
        
    rl.close();
});

// MERGE!!!