// PROBLEMA 5

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });

rl.question('Introduceti cele 2 numere A si B, pe care doriti sa le calculati:\nIntroduceti numarul A: ', (a) => {
    a = parseFloat(a);
    rl.question('Introduceti numarul B: ', (b) => {
        b = parseFloat(b);
        rl.question('Introduceti OPERATORUL matematic ( + , - , * sau / ): ', (operator) => {

            switch (true) {
                case (operator == '+'):
                    console.log(a + ' + ' + b + ' = ' + (a + b) + ' :)');
                    break;
                case (operator == '-'):
                    console.log(a + ' - ' + b + ' = ' + (a - b) + ' :)');
                    break;
                case (operator == '*'):
                    console.log(a + ' * ' + b + ' = ' + (a * b)) + ' :)';
                    break;
                case (operator == '/'):
                    console.log(a + ' / ' + b + ' = ' + (a / b) + ' :)');
                    break;
                default:
                    console.log('Nu s-a ales un operator potrivit... Incercati din nou!');
                    break;
            }

            rl.close();
        });
    });
});

// MERGE!!!