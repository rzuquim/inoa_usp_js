// ---------------------------------------
// Exercício 12: Escreva uma rotina que trunque 
// um texto pelo número de palavras
// ---------------------------------------

var texto = 'Aprender JS é muito legal!';
var n = 3;

function truncaTexto(texto, n) {
    if(n < 0) {
        console.log('n deve ser um número não negativo');
        return null;
    }
    return texto.split(' ').slice(0,n).join(' ');
}

console.log(truncaTexto(texto, n));

// output esperado:
// Aprender JS é
