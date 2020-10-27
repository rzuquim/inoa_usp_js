// ---------------------------------------
// Exercício 4: Escreva uma rotina que gere
// um número inteiro aleatório
// ---------------------------------------
var min = 1;
var max = 6;

var random = Math.random();

// random * (max - min) -> limita aleatoriedade
// Math.floor( --> garante arredondamento
// + min -> garante piso
// random * (max - min + 1) -- garante teto inclusive
var randomInt = Math.floor(random * (max - min + 1)) + min;

console.log(randomInt);
