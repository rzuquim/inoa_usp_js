// ---------------------------------------
// Exercício 17: Escreva uma rotina que converta um número
// para números romanos e outra pra converter de volta
// ---------------------------------------

var number = 1373;

// seu código aqui
let array = number.toString().split('').reverse()
let roman = ''

let digitos = [['I', 'IV', 'V', 'IX'],
               ['X', 'XL', 'L', 'XC'],
               ['C', 'CD', 'D', 'CM'],
               ['M', 'M', 'M', 'M'],]
// vai só até 3999, mais que isso vai ficar colocando MMMM...
for(let i = array.length - 1 ; i >= 0 ; i--) {
    if(array[i] === 4)
        roman = roman + digitos[i][1]
    else if(array[i] === 9)
        roman = roman + digitos[i][3]
    else {
        roman = roman + digitos[i][2].repeat( Math.floor(array[i]/5) )
        roman = roman + digitos[i][0].repeat( array[i]%5 )
    }
}

console.log(roman === "MCCCLXXIII");

// seu código aqui
let dic = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

let backToDecimal = dic[roman[0]];
for(let i = 1 ; i < roman.length ; i++) {
    atual = dic[roman[i]];
    anterior = dic[roman[i-1]];
    if(atual <= anterior)
        backToDecimal += atual;
    else
        backToDecimal += (atual - anterior*2);
        // Subtrai por 2*anterior porque quando eu olhei ele separadamente,
        // o seu valor foi somado. Pega o número XLIX de exemplo. Quando o I
        // foi examinado, foi somado 1 porque I < L
        // E no caso o primeiro X foi somado, porque backToDecimal é inicializado
        // com o valor de roman[0].
}

console.log(backToDecimal === 1373);
