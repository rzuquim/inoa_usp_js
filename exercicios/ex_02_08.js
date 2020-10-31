// ---------------------------------------
// Exercício 18: Escreva uma rotina ofusque
// um e-mail de um usuário
// ---------------------------------------

var email = "madonna_rainha@example.com";

// seu código aqui
let aux = email.split('@');
var obfuscated = '';
obfuscated += aux[0][0];
obfuscated += '*'.repeat(aux[0].length - 2);
obfuscated += aux[0][aux[0].length-1] + '@' + aux[1].slice(0,7);

console.log(obfuscated === "m************a@example");
// Aparentemente tem que tirar o ".com" do final
