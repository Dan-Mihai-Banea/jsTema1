// PROBLEMA 4

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti un numar de metri: ', (metri) => {
    rl.question('Introduceti o categorie (centimetri, kilometri, mile): ', (categorie) => {
        
    switch (categorie.toLowerCase()) {
        case 'centimetri':
            const centimetri = metri * 100;
            console.log(`${metri} metri sunt egali cu: ${centimetri} centimetri.`);
            break;
        case 'kilometri':
            const kilometri = metri / 1000;
            console.log(`${metri} metri sunt egali cu: ${kilometri} kilometri.`);
            break;
        case 'mile':
            const mile = metri / 1609.34;
            console.log(`${metri} metri sunt egali cu: ${mile} mile.`);
            break;
        default:
            console.log(`Nu s-a introdus o categorie corecta... Va rog incercati din nou!`);
            break;
    }
        
    rl.close();
    });
});

// FUNCTIONEAZA!!!