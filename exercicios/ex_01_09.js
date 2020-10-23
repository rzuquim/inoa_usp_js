
// ---------------------------------------
// Exercício 9: Escreva uma rotina que trunque
// um texto em N caracteres
// ---------------------------------------

var input = 'Do dolore ex et veniam.'
var maxLength = 6

// seu código aqui

let truncated = '';
for(var i = 0; i < maxLength; i++){
    truncated += input[i];
}

truncated === 'Do dol'
