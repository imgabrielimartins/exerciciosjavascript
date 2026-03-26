/* 
As maçãs custam R$ 0,30 se forem compradas menos do que
 uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const readlineSync = require('readline-sync');

let macasCompradas = readlineSync.questionInt('Digite o numero de macas que deseja comprar: ');

if (macasCompradas < 12){
   let macas = 0.30 * macasCompradas
    console.log(`Você deseja comprar: ${macasCompradas} maçãs
        valor total: ${macas}`
    );
} else{
   let macas = 0.25 * macasCompradas
    console.log(`Você deseja comprar: ${macasCompradas} maçãs
        Valor total: ${macas}`
    );
}