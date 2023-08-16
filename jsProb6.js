// PROBLEMA 6

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti cele 3 numere, pentru a afla care este mai mare:\nIntroduceti primul numar: ', nr1 => {
    rl.question('Introduceti al doilea numar: ', nr2 => {
        rl.question('Introduceti al treilea numar: ', nr3 => {

            nr1 = parseInt(nr1);
            nr2 = parseInt(nr2);
            nr3 = parseInt(nr3);
            let celMaiMareNumar;

            if (nr1 >= nr2 && nr1 >= nr3) {
                celMaiMareNumar = nr1; 
            } else if (nr2 >= nr1 && nr2 >= nr3) {
                celMaiMareNumar = nr2;
            } else {
                celMaiMareNumar = nr3;
            }

            console.log(`Cel mai mare numar dintre cele 3 introduse este: ${celMaiMareNumar}`);
            rl.close();
        });
    });
});

// MERGE!!!