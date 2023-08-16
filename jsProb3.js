// PROBLEMA 3

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

function palindrom(str) {

    const string = str.toLowerCase();
    const lungimeString = string.length;
    
    for (let i = 0; i < lungimeString; i++) {
        for (let j = lungimeString - 1; j >= i; j--) {
            if (string[i] !== string[j]) {
                return 0;
            }
            return 1;
        }
    }
}

rl.question('Introduceti cuvantul pe care doriti sa-l verificati daca este un palindrom: ', (cuvant) => {

    const rezultat = palindrom(cuvant);

    if (rezultat !== 0) {
        console.log('DA');
    } else {
        console.log('NU');
    }

    rl.close();
});

// MERGE DA NU MERGE !!!???'./'./]'[\]/'\[;}"|:"]]\#$%#&#&!%#^&@$#%@$%:((((((((.....