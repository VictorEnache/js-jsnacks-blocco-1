/* 

Stampa le potenze di 2 fino a 1000.

*/

let potenze_2 = []

let potenza;

for (i = 0; i <=1000; i++){
    potenza = Math.pow(2, i);
    potenze_2.push(potenza)
}

console.log(potenze_2)