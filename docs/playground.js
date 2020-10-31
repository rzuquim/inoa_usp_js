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

// let person = {
//   name: "Joaquim",
//   age: 12,
// };

// let legalVotingAge = {
//   br: 16,
//   us: 18,
// };

// let country = "us";

// let message = person.age >= legalVotingAge[country] ? "Pode votar" : "Não vota";
// console.log(message);

// function criadorDeAlunos(nome, numeroUSP) {
//   let aluno = {
//     nome: nome,
//     numeroUSP: numeroUSP,
//   };

//   aluno.estudar = (materia) => {
//     for (let hours = 0; hours <= 2; hours++) {
//       console.log(`Estou estudando ${materia} por ${hours}...`);
//     }
//     console.log(`Já deu por hoje`);
//   };
//   return aluno;
// }

// let rafael = criadorDeAlunos("Rafael", 1234);
// rafael.estudar("matematica");

// let veronica = criadorDeAlunos("Veronica", 4321);

// let alunos = [rafael, veronica];

// let imprimeNome = function (aluno) {
//   console.log(`aluno.nome ${aluno}`);
//   return aluno.nome;
// };

// alunos.forEach(imprimeNome);

// let myCounter = (function () {
//   let counter = 0;

//   return function count() {
//     return ++counter;
//   };
// })();

// let nicePeople = [{ name: "Lucas" }, { name: "Matheus" }];
// nicePeople.push({ name: "Vitor" });

// function isCreative(color, creativeColors = ["red", "blue", "yellow"]) {
//   return creativeColors.includes(color);
// }

// let person = {
//   first_name: "Jonathan",
//   last_name: "Hsu",
//   mediu_handle: "@jhsu98",
// };

// let colors = ["red", "blue", "yellow"];

// function range(start, end) {
//   let response = [];
//   for (let i = start; i < end; i++) {
//     response.push(i);
//   }
//   return response;
// }

// for (let i of range(0, 100)) {
//   console.log(i);
// }

// const values = ["a", "b", "c", "d", "e", "c"];

// /**
//  * Método que todos os elementos iguais a element
//  * @param {Array} array
//  * @param {any} element
//  */
// function remove(array, element) {
//   let index;
//   let removed = [];
//   while ((index = array.indexOf(element)) > 0) {
//     removed = removed.concat(array.splice(index, 1));
//   }
//   return removed;
// }

// const part = remove(values, "c");
// console.log(part);
// console.log(values);

const letters = ["a", "b", "c", "d", "e", "c"];
const numbers = [0, 1, 2, 3, 4, 5];

let values = [...letters, ...numbers];
