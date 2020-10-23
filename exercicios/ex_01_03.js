
// ---------------------------------------
// Exercício 3: Escreva uma rotina que 
// determina se um número é ou não natural
// ---------------------------------------
var naturalNum = 2;

// seu código aqui

function check_natural(n) {
    return n == Math.round(n) && n > 0;
}

let isNatural;

isNatural = check_natural(naturalNum);

isNatural === true

// -- another input --

var realNum = 2.57;

// seu código aqui

isNatural = check_natural(realNum);

isNatural === false
