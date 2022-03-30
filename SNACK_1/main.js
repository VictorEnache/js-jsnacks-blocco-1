/* 
SNACK 1 
L’utente inserisce due numeri in successione, 
con due prompt.
Il software stampa il maggiore.
*/

const number_1 = parseInt(prompt('inserisci un numero'))

const number_2 = parseInt(prompt('inserisci un altro numero'))

if (number_1 > number_2) {
 console.log(`Il primo numero è piu grande: ${number_1}`)
}

else if (number_2 > number_1) {
    console.log(`Il secondo numero è piu grande: ${number_2}`)
}

else { 
    console.log(`I numeri sono uguali: ${number_1} = ${number_2}`)

}