// PROBLEMA 7

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti un numar, pentru a afisa tabla inmultirii a acestuia: ', (numar) => {

    for (let i = 1; i <= 10; i++) {
        console.log(numar + ' * ' + i + ' = ' + numar*i);
    }

    rl.close();
});

// MERGE!!!