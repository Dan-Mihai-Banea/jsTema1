// PROBLEMA 15

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti varsta persoanei: ', (varsta) => {

    varsta = parseInt(varsta);

    let categorieVarsta;

    switch (true) {
        case (varsta >= 0 && varsta <= 12):
            categorieVarsta = 'copil';
            break;
        case (varsta >= 13 && varsta <= 19):
            categorieVarsta = 'adolescent';
            break;
        case (varsta >= 20 && varsta <= 59):
            categorieVarsta = 'adult';
            break;
        case (varsta >= 60):
            categorieVarsta = 'senior';
            break;
        default:
            categorieVarsta = 'Nu s-a introdus o varsta!';
            break;
    }

    console.log('Persoana este un: ' + categorieVarsta + '.');
 
    rl.close();
});

// MERGE KIND OF... (DE IMBUNATATIT!!!)