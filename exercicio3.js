/* 
Implemente um programa que recebe uma nota de 0 a 10 e 
classifica como "Aprovado", "Recuperação", 
ou "Reprovado" utilizando if-else if.
*/

const readlineSync = require('readline-sync');

let nota = readlineSync.questionInt('Digite sua nota: ');

if (nota < 0 || nota > 10) {
    console.log('Nota inválida!');
} else if(nota >= 0 && nota <= 4){
    console.log('Você está reprovado!');
} else if (nota >= 5 && nota <= 7){
    console.log("Você está de recuperação!");
} else{
    console.log('Você está aprovado!');
}