// ---------------------------------------
// Exercício 14: Calcule a média das notas de uma turma de alunos e
// classifique essa média nos critérios de nota americanos:
// Nota F se menor que 6
// Nota D- se entre 6.0 e 6.2
// Nota D se entre 6.3 e 6.6
// Nota D+ se entre 6.7 e 6.9
// Nota C- se entre 7 e 7.2
// Nota C se entre 7.3 e 7.6
// Nota C+ se entre 7.7 e 7.9
// Nota B- se entre 8 e 8.2
// Nota B se entre 8.3 e 8.6
// Nota B+ se entre 8.7 e 8.9
// Nota A- se entre 9 e 9.2
// Nota A se entre 9.3 e 9.6
// Nota A+ se entre 9.7 e 10
// ---------------------------------------

var studentGrades = [
  ["Mía", 8.0],
  ["Roberta", 7.7],
  ["Guadalupe", 8.8],
  ["Diego", 9.5],
  ["Miguel", 6.8],
];

// seu código aqui
var classGrade = 0;
for(let i = 0 ; i < studentGrades.length ; i++){
  classGrade += studentGrades[i][1]
}
classGrade = classGrade/studentGrades.length;

if(classGrade < 6)
  classGrade = 'F';
else if(classGrade <= 6.2)
  classGrade = 'D-';
else if(classGrade <= 6.6)
  classGrade = 'D';
else if(classGrade <= 6.9)
  classGrade = 'D+';
else if(classGrade <= 7.2)
  classGrade = 'C-';
else if(classGrade <= 7.6)
  classGrade = 'C';
else if(classGrade <= 7.9)
  classGrade = 'C+';
else if(classGrade <= 8.2)
  classGrade = 'B-';
else if(classGrade <= 8.6)
  classGrade = 'B';
else if(classGrade <= 8.9)
  classGrade = 'B+';
else if(classGrade <= 9.2)
  classGrade = 'A-';
else if(classGrade <= 9.6)
  classGrade = 'A';
else if(classGrade <= 10)
  classGrade = 'A+';

console.log(classGrade === "B-");
