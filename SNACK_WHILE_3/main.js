/* 

SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

let i = 0;

somma = 0;

let numero;

while (i<10) {
    numero = parseInt(prompt('inserisci un numero'))

    somma+=numero

    i++
}

comsole.log(somma)