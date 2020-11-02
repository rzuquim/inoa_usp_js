// ---------------------------------------
// Exercício 3: Escreva uma rotina que
// determina se um número é ou não natural
// ---------------------------------------
var naturalNum = 2;

var asNatural = Math.sqrt(Math.floor(naturalNum) ** 2);
var isNatural = asNatural == naturalNum;

console.log(isNatural === true);
