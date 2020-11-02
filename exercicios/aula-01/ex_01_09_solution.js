
// ---------------------------------------
// Exercício 9: Escreva uma rotina que trunque
// um texto em N caracteres
// ---------------------------------------

var input = 'Do dolore ex et veniam.';
var maxLength = 6;

// 1
var truncated = input.substr(0, maxLength);

console.log(truncated === 'Do dol');

// 2
truncated = '';
var i = 0
while(i < maxLength) {
    truncated += input[i];
    i++;
}

console.log(truncated === 'Do dol');

// 3
/* Uma maneira alternativa de resolver o problema seria usando
   "slice", que é matéria das próximas aulas */
var truncated = input.slice(0, maxLength);

console.log(truncated === 'Do dol');

/* A diferença entre slice e substr é que no slice colocamos os
   índice de onde começamos e o ÍNDICE de até onde paramos.
   No substr colocamos o índice onde começamos e o tamanho do
   pedaço que queremos.
*/
