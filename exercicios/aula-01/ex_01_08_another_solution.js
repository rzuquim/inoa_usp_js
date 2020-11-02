
// ---------------------------------------
// Exercício 8: Escreva uma rotina que pinte
// o fundo da página de uma cor aleatória
// ---------------------------------------
// seu código aqui
let r, g, b;
r = Math.floor(Math.random()*256);
g = Math.floor(Math.random()*256);
b = Math.floor(Math.random()*256);

let randomBg = 'rgb(' + r + ',' + b + ',' + g + ')';

// this will set the background color
document.body.style.background = randomBg
