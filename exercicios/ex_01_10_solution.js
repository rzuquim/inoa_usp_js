// ---------------------------------------
// Exercício 10: Escreva uma rotina que aplique uma máscara
// de zeros a esquerda de um número
// ---------------------------------------

var input = 123;
var mask = "000000";

var masked = (mask + input).slice(-mask.length);

console.log(masked === "000123");
