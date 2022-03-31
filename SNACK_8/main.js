/* 

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

*/

const numero_inserito = prompt('inserisci un numero formato da 4 cifre');

console.log(isNaN(numero_inserito))


if (numero_inserito.length === 4 && !isNaN(numero_inserito)){

    let lista_numeri = Array.from(numero_inserito)
    
    let numero
    
    somma = 0;
    
    for (let i= 0; i < lista_numeri.length; i++){
    
        numero = Number(lista_numeri[i])
    
        somma += numero
    }
    
    console.log(somma)

}
else{
    alert('devi inserire quattro numeri')
}

