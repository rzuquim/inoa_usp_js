
// ---------------------------------------
// Exercício 1: Escreva uma rotina que imprima 
// o valor arredondado correto de números 
// (que em js são armazenados em ponto flutuante)
// ---------------------------------------
var num = 0.3 + 0.6;
var decimalPlaces = 2;

// seu código aqui

let convert = Math.round(num*100)/10**decimalPlaces;
console.log(convert);

convert === 0.90
