// PROBLEMA 11

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti ANUL, pentru a-l verifica daca este BISECT: ', (an) => {

    an = parseInt(an);

    if (an % 4 == 0 || an % 400 == 0) {
        console.log('Anul ' + an + ' ESTE bisect!');
    } else {
        console.log('Anul ' + an + ' NU ESTE bisect...');
    }
 
    rl.close();
});

// MERGE!!!