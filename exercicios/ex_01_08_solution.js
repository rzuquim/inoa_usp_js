// ---------------------------------------
// Exercício 8: Escreva uma rotina que pinte
// o fundo da página de uma cor aleatória
// ---------------------------------------
// seu código aqui

// this will set the background color
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

var hexRed = red.toString(16);
var hexGreen = green.toString(16);
var hexBlue = blue.toString(16);

var randomBg = `#${hexRed}${hexGreen}${hexBlue}`;
console.log(randomBg);

document.body.style.background = randomBg;
