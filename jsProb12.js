// PROBLEMA 12

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });
let y = 0;

rl.question('Introduceti numarul pe care doriti sa-l afisati invers: ', (numarIntrodus) => {
    numarIntrodus = parseInt(numarIntrodus);
    
    function inversare(x) {

        let numar = x;

        while (numar >= 1) {

            let x = numar % 10;
            y = y * 10 + x;

            numar = numar / 10;
            numar = parseInt(numar);
        }
    }

    inversare(numarIntrodus);

    console.log('Numarul ales este: ' + numarIntrodus);
    console.log('Numarul INVERSAT este: ' + y);

    rl.close();
});

// MERGE!!! APROAPE... (DE IMBUNATATIT...)