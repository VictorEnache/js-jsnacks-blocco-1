let primi_10_numeri = []

let numero_array;

let numero;

let somma = 0;

let media;

for (i = 1; i <= 10; i++){
    numero_array = i
    primi_10_numeri.push(numero_array)
}

for (i = 0; i < primi_10_numeri.length; i++){
    numero = primi_10_numeri[i]
    somma += numero
}

media = somma / primi_10_numeri.length;

console.log(somma)
console.log(media)

