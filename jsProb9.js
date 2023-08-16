// PROBLEMA 9

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { log } = require('node:console');

const rl = readline.createInterface({ input, output });
let x = 1;
let y = 0;
let z = 1;

rl.question('Introduceti un numar, pentru a afisa N elemente din sirul lui Fibonacci: ', (n) => {
    n = parseInt(n);
    
    function Fibonacci(nr) {

        let numar = nr;

        for (let i = 0; i <= numar; i++) {
            if (i == 0) {
                x = 0;
            } else if (i == 1) {
                x = 1;
            } else if (z < 10) {
                x = x * 10 + z;
                x = parseInt(x);
                y = x % 100;
                y = parseInt(y);
                z = (y / 10) + (y % 10);
                z = parseInt(z);
            } else if (z < 20) {
                x = x * 100 + z;
                x = parseInt(x);
                y = x % 1000;
                y = parseInt(y);
                z = (y / 100) + (y % 100);
                z = parseInt(z);
            } else if (z < 100) {
                x = x * 100 + z;
                x = parseInt(x);
                y = x % 10000;
                y = parseInt(y);
                z = (y / 100) + (y % 100);
                z = parseInt(z);
            } else if (z < 150) {
                x = x * 1000 + z;
                x = parseInt(x);
                y = x % 10000;
                y = parseInt(y);
                z = (y / 100) + (y % 100);
                z = parseInt(z);
            } else if (z < 250){
                x = x * 1000 + z;
                x = parseInt(x);
                y = x % 100000;
                y = parseInt(y);
                z = (y / 100) + (y % 1000);
                z = parseInt(z);
            } else {
                // NU MAI CONTEAZA CA ORICUM NU MERGE MAI MULT PRIN METODA ASTA
            }
            // console.log(z);
        }
    }

    Fibonacci(n);

    console.log('Seria primelor ' + n + ' elemente din sirul Fibonacci este:');
    console.log(x);

    rl.close();
});

// DE IMBUNATATIT... (SAU DE REFACUT PRIN METODA DE STRING || FORMULA MATEMATICA SIMPLA)

// console.log(1123581321345589 * 1000 + 144);