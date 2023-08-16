// PROBLEMA 10

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

const numere = [];

function calculMedie() {
    rl.question('Introduceti un numar (sau scrieti "stop" pentru a opri functia si a afisa media numerelor introduse): ', input => {

        if (input.toLowerCase() === 'stop') {
        rl.close();
        const medie = numere.reduce((sum, num) => sum + num, 0) / numere.length;
        console.log(`Media numerelor introduse este: ` + medie + ' :)');
        } else {
        const parsedNumber = parseFloat(input);
        if (!isNaN(parsedNumber)) numere.push(parsedNumber);
        else console.log('Input invalid! Va rog introduceti un numar...');
        calculMedie();
        }
    });
}

calculMedie();

// FUNCTIONEAZA!!!