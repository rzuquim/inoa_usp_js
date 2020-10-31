// ---------------------------------------
// Exercício 15: Escreva uma rotina capture as N primeiras
// palavras de um texto.
// ---------------------------------------

var text = "The quick brown fox jumps over the lazy dog";
var words = 3;

// seu código aqui
var output = text.split(' ').slice(0, words).join(' ');

console.log(output === "The quick brown");
