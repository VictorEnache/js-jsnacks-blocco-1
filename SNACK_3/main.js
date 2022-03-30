/* 

SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/
let numero

let lista_numeri = []

let somma = 0;

for (i = 0; i < 10; i++){
    numero = parseInt(prompt('Inserisci un numero'))
    
    lista_numeri.push(numero)
    
   
}

for (i = 0; i < lista_numeri.length; i++){
    somma += lista_numeri[i]
}

console.log(lista_numeri)
console.log(`Totale: ${somma}`)

