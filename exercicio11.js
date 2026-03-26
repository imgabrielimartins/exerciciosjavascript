/*
Fazer um algoritmo para receber números 
decimais até que o usuário digite 0 e fazer a
média aritmética desses números.
*/

const readlineSync = require('readline-sync');

let soma = 0;
let contador = 0;
let numero = readlineSync.questionFloat('Digite um numero: ');

while(numero !== 0){
    soma = soma + numero;
    contador++

    numero = readlineSync.questionFloat('Digite outro numero: ');
}

if(contador > 0){
    let media = soma / contador;
    console.log(`Média: ${media}`);
}