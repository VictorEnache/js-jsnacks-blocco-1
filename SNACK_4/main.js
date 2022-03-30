/* 

SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del 
grande Gatsby, chiedi all’utente il suo nome e 
comunicagli se può partecipare o no alla festa.

*/


let bool = false

let nome_invitato = prompt('inserisci il tuo nome')

const elenco_invitati = ['victor', 'ginevra', 'jonny', 'vincenzo']

let invitato;

for (let i = 0; i < elenco_invitati.length; i++) {
    invitato = elenco_invitati[i]

    if (nome_invitato === invitato){
        bool = true
    }
}

if (bool){
    console.log(`sei nell'elenco ${nome_invitato}, puoi partecipare`)
}

else {
    console.log(`non sei nell'elemco ${nome_invitato}, non puoi partecipare`)
}