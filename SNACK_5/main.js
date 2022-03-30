/* 

SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let elenco_numeri = []

let numero_inserito

for (let i = 0; i < 6; i++) {
    numero_inserito = parseInt(prompt('inserisci un numero'))

    if (numero_inserito % 2 != 0){
        elenco_numeri.push(numero_inserito)
    }
}

console.log(elenco_numeri)