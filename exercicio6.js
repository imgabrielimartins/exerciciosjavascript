/* 
Escreva um algoritmo para ler 2 valores 
(considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const readlineSync = require('readline-sync');

let valor1 = readlineSync.questionInt('Digite um valor: ');
let valor2 = readlineSync.questionInt('Digite outro valor: ');

if(valor1 === valor2){
    console.log('Escreva valores diferentes!');
} else if(valor1 > valor2){
    console.log(`${valor2} e ${valor1}`);
} else{
    console.log(`${valor1} e ${valor2}`);
}