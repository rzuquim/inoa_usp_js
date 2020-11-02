// ---------------------------------------
// Exercício 10: Escreva uma rotina que aplique uma máscara
// de zeros a esquerda de um número
// ---------------------------------------

var input = 123;
var mask = "000000";

// 1
var masked = (mask+input).substr(-mask.length);

console.log(masked === "000123");

// 2
masked = '';
let num = input + '';

let n = mask.length - num.length

/* Só vai funcinar enquanto o input tiver no máximo
   o mesmo número de dígitos do que a máscara */
var i = 0;
while(i < mask.length) {
    masked += (i < n)? mask[i] : num[i-n];
    i++;
}

console.log(masked === "000123");
