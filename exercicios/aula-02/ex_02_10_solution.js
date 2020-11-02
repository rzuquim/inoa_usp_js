// ---------------------------------------
// Exercício 20: Escreva uma função que gere
// uma lista de N inteiros entre 2, opcionalmente
// començando pelo número `start` (por padrão 0)
// ---------------------------------------

function numbers(length, start) {
  // seu código aqui
  let array = [];

  if(typeof(start) === 'undefined')
    start = 0;
  for(let i = 0 ; i < length ; i++) {
    array.push(i + start);
  }
  return array;
}

console.log(numbers(10)); // [0,1,2,3,4,5,6,7,8,9]
console.log(numbers(10, 1)); // [1,2,3,4,5,6,7,8,9, 10]
