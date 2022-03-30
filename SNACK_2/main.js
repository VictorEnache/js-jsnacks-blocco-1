/* 

SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const parola_1 = prompt('scrivi la prima parola')

const parola_2 = prompt('scrivi la seconda parola')

const lunghezza_1 = parola_1.length

const lunghezza_2 = parola_2.length


if (lunghezza_1 < lunghezza_2){
    console.log(`"${parola_1}" è più corta di "${parola_2}"`)
}

else if (lunghezza_2 < lunghezza_1){
    console.log(`"${parola_2}" è più corta di "${parola_1}"`)
}

else{
    console.log(`"${parola_1}" è lunga quanto "${parola_2}"`)
}