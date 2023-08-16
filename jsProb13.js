// PROBLEMA 13

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

let sumaPare = 0;
let sumaImpare = 0;

rl.question('Introduceti numarul caruia doriti sa-i numarati cifrele PARE si IMPARE: ', (numarIntrodus) => {
    numarIntrodus = parseInt(numarIntrodus);

    function numaratoare(x) {

        let numar = x;

        while (numar >= 1) {

            let x = numar % 10;

            if (x % 2 == 0) {
                sumaPare++;
            } else {
                sumaImpare++;
            }

            numar = numar / 10;
            numar = parseInt(numar);
        }
    }

    numaratoare(numarIntrodus);

    console.log('Numarul ales este: ' + numarIntrodus);
    console.log('Numarul cifrelor PARE din numarul ales este: ' + sumaPare);
    console.log('Numarul cifrelor IMPARE din numarul ales este: ' + sumaImpare);

    rl.close();
});

// MERGE!!!