// ---------------------------------------
// Exercício 15: Escreva uma rotina que receba
// um array de números e imprima para cada um
// deles se o número é par ou ímpar
// ---------------------------------------

var numbers = [1, 3, 2, 4, 11, 5, 7, 8];

function logParidade(n) {
    if(n%2 === 0)
        console.log(`${n} é par`);
    else
        console.log(`${n} é ímpar`);
    return null;
}

numbers.forEach(logParidade);

// output esperado:
// 1 é ímpar
// 3 é ímpar
// 2 é par
// 4 é par
// 11 é ímpar
// 5 é ímpar
// 7 é ímpar
// 8 é par
