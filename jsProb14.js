// PROBLEMA 14

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti intervalul [a, b] pentru care doriti sa gasiti numerele prime:\nIntroduceti a: ', (a) => {
    rl.question('Introduceti b: ', (b) => {
        a = parseInt(a);
        b = parseInt(b);

        if (a > b) {
        console.log('a trebuie sa fie mai mic sau egal cu b...');
        rl.close();
        return;
        }

        for (let k = a; k <= b; k++) {

            let j = 0;

            for (let i = 1; i <= k; i++) {
                if (k % i == 0) {
                    j++;
                }
            }

            if (j == 2) {
                console.log(`Numarul ${k} ESTE prim!`);
            }
        }

        rl.close();
    });
});

// FUNCTIONEAZA!!! (A FEW HOURS LATER.............) ...