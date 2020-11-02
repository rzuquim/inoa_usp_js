// ---------------------------------------
// Exercício 1: Escreva uma rotina que imprima
// o valor arredondado correto de números
// (que em js são armazenados em ponto flutuante)
// ---------------------------------------
var num = 0.3 + 0.6;
var decimalPlaces = 2;

// 1
var multiplier = Math.pow(10, 2);
var convert = Math.round(num * multiplier) / multiplier;

console.log(convert === 0.9);

// 2
var convert = Number(num.toFixed(decimalPlaces));
console.log(convert === 0.9);

// 3
var shifted = Math.round(num + "e" + decimalPlaces);
var convert = Number(shifted + "e" +  -decimalPlaces);
console.log(convert === 0.9);
