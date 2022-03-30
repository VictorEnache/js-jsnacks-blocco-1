/* 

Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.

*/

const numero_dato = parseInt(prompt('Decidi un numero'));

let cubo;

let tutti_cubi = [];

for (i = 1; i <= numero_dato; i++) {

    cubo = Math.pow(i, 3)  
    tutti_cubi.push(cubo) 
}

console.log(tutti_cubi)