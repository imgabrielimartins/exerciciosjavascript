/* 
Escreva um algoritmo para ler 
um número inteiro e escrevê-lo na tela 10 vezes.
*/

const readlineSync = require('readline-sync');

let numero = readlineSync.questionInt('Digite um numero: ');

for(let i = 1; i <= 10; i++){
    console.log(numero);
}