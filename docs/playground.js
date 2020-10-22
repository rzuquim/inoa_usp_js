// js só tem um tipo numérico `number` => ponto flutuante
console.log(0.1 * 0.2);

// [var, let, const] Exemplo de escopo de variáveis e hoisting
{
  const PI = 3;
  let productPrice = 5;
  console.log(productPrice);

  {
    var outraVariavel = 2;
    console.log("ladentro" + productPrice + PI);
  }

  console.log(outraVariavel);
}

var outraVariavel = 3;
console.log(outraVariavel);
