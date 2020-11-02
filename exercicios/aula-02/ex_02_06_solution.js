// ---------------------------------------
// Exercício 16: Escreva uma rotina que 
// converte um número em binário para decimal
// ---------------------------------------

var binary = '1000101';
var decimal = null;

// 1
for(let i = binary.length - 1 ; i >= 0 ; i--) {
    decimal += binary[i] * 2**(binary.length - (i + 1))
}

console.log(decimal === 69);

// 2
/* Existe uma função nativa que faz esse trabalho pra gente */
decimal = parseInt(binary, 2);

console.log(decimal === 69);