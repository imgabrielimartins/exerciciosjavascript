/*
Escreva um programa que solicita ao usuário 5 números 
e calcula a soma total
utilizando um loop for.
*/

const readlineSync = require('readline-sync');

let soma = 0;

for(let i = 1; i <= 5; i++){
    let numero = readlineSync.questionInt(`Digite o ${i} numero: `);
    soma = soma + numero;
}

console.log("Soma total: ", soma);