// ---------------------------------------
// Exercício 12: Escreva uma rotina que trunque 
// um texto pelo número de palavras
// ---------------------------------------

var numbers = ;

// seu código aqui
/* Acho que o enunciado e o output esperado não são do mesmo exercício
   Fiz uma função que verifica se o número é par (pelo output esperado) e
   fiz uma outra que trunca um texto (enunciado)
*/
var ehPar = (n) => n%2 == 0;

function truncaTexto(texto, n) {
    if(n < 0) {
        console.log('n deve ser um número não negativo');
        return null;
    }
    return texto.split(' ').slice(0,n).join(' ');
}

// output esperado:
// 1 é ímpar
// 3 é ímpar
// 2 é par
// 4 é par
// 11 é ímpar
// 5 é ímpar
// 7 é ímpar
// 8 é par
