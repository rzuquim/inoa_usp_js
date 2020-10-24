// let text = document.getElementById("answer_1").innerHTML;

// console.log(text);

// document.getElementById("answer_1").innerHTML = `${text.substring(0, 100)}...`;

// let number = Number(
//   (0.1 * (0.2 + 0.2)).toFixed(2)
// );

// console.log(text);

// // js só tem um tipo numérico `number` => ponto flutuante
// console.log(0.1 * (0.2 + 0.2));

// [var, let, const] Exemplo de escopo de variáveis e hoisting
// {
//   const PI = 3;
//   let productPrice = 5;

//   console.log(productPrice);

//   {
//     let product = 2;
//     console.log("ladentro" + product + "qualquer" + PI);
//   }

//   //console.log(product);
// }

//var product = 3;
//console.log(product);

// const meuPi = Math.PI;
// {
//   let product = {
//     name: "Bota",
//     price: 10.45,
//     discount: 0.3,
//   };
// }

// //product = 2;

// product.name = "Guitarra";

// console.log(typeof product);

// let totalPrice = (1 - product.discount) * product.price;

// console.log(`Sua bota custa ${product.name}`);

let person = {
  name: "Joaquim",
  age: 12,
};

let legalVotingAge = {
  br: 16,
  us: 18,
};

let country = "us";

let message;

if (person.age >= legalVotingAge[country]) {
  message = "Pode votar";
}

console.log(message);
