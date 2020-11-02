// ---------------------------------------
// Exercício 3: Escreva uma rotina que
// determina se um número é ou não natural
// ---------------------------------------
var naturalNum = 2;

// 1
var asNatural = Math.sqrt(Math.floor(naturalNum) ** 2);
var isNatural = asNatural === naturalNum;

console.log(isNatural === true);

// 2
var realNum = 2.57;

function check_natural(n) {
    return n > 0 && n === Math.round(n);
}

isNatural = check_natural(realNum);

console.log(isNatural === false);
