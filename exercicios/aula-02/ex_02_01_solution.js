// ---------------------------------------
// Exercício 11: Escreva uma rotina que conte o número
// de ocorrências de uma palavra em um texto.
// ---------------------------------------

var text = "The quick brown fox jumps over the lazy dog";
var find = "the";

// seu código aqui
let count = 0;
for(let i = 0 ; i < text.length ; i++) {
    if(text.slice(i, i+find.length).toLowerCase().includes(find.toLowerCase()))
        count++;
}

console.log(count === 2);
