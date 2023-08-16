// PROBLEMA 8

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti intervalul [a, b] pentru care doriti sa aflati suma numerelor PARE si IMPARE:\nIntroduceti a: ', (a) => {
    rl.question('Introduceti b: ', (b) => {
        a = parseInt(a);
        b = parseInt(b);

        if (a > b) {
        console.log('a trebuie sa fie mai mic sau egal cu b...');
        rl.close();
        return;
        }

        let sumaPare = 0;
        let sumaImpare = 0;

        for (let i = a; i <= b; i++) {
            if (i % 2 == 0) {
                sumaPare = sumaPare + i;
            } else {
                sumaImpare = sumaImpare + i;
            }
        }

        console.log('Suma numerelor PARE din interval este: ' + sumaPare);
        console.log('Suma numerelor IMPARE din interval este: ' + sumaImpare);

        rl.close();
    });
});

// MERGE!!!