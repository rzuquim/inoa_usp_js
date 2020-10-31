// ---------------------------------------
// Exercício 19: FizzBuzz (obrigatório)
// FizzBuzz é um jogo onde você deve enumerar
// todos os números de 1 até 100 mas:
// - a cada múltiplo de 3 devemos falar Fizz
// - a cada múltiplo de 5 devemos falar Buzz
// - a cada múltiplo de 3 e 5 devemos falar FizzBuzz
// ---------------------------------------

// seu código aqui
for(let i = 1 ; i <= 100 ; i++) {
    if(i%3 == 0 && i%5 == 0)
        console.log('FizzBuzz')
    else if(i%3 == 0)
        console.log('Fizz')
    else if(i%5 == 0)
        console.log('Buzz')
    else
        console.log(i)
}
/* output esperado:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
Fizz Buzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
Fizz Buzz
31
32
Fizz
34
Buzz
Fizz */
