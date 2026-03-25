/* 
Escreva um programa que calcula o Índice de Massa Corporal (IMC) 
de uma pessoa e determina a categoria de peso 
(baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const readlineSync = require('readline-sync');

let peso = readlineSync.questionFloat('Digite seu peso: ');
let altura = readlineSync.questionFloat('Digite sua altura: ');

altura = altura / 100;
let calculoAltura = altura * altura
let calculoPeso = peso / calculoAltura

console.log(`Seu IMC é: ${calculoPeso.toFixed(2)}`);

if(calculoPeso <= 18.5){
    console.log('Você está abaixo do peso!');
} else if (calculoPeso >= 18.5 && calculoPeso <= 24.9){
    console.log('Seu peso está normal!');
} else if(calculoPeso >= 25 && calculoPeso <= 29.9){
    console.log('Você está com sobrepeso!');
} else{
    console.log('Você está com obesidade!')
}