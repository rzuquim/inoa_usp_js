
// ---------------------------------------
// Exercício 6: Escreva uma rotina que arredonde 
// um número para o próximo múltiplo de 5
// ---------------------------------------
var num = 137;

var add5 = num + 5;
var divisionRest = add5 % 5;
var near5 = add5 - divisionRest;

console.log(near5 === 140);
