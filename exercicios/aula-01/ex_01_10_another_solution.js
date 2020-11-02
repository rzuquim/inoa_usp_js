
// ---------------------------------------
// Exercício 10: Escreva uma rotina que aplique uma máscara 
// de zeros a esquerda de um número
// ---------------------------------------
var input = 123;
var mask = '000000';

// seu código aqui
let masked = '';
let num = input + '';

let n = mask.length - num.length

/* Só vai funcinar enquanto o input tiver no máximo
   o mesmo número de dígitos do que a máscara */
for(var i = 0 ; i < mask.length ; i++) {
    masked += (i < n)? mask[i] : num[i-n]
}

masked === '000123'
