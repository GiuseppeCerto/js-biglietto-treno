// 1.chiedere nome passeggero
let firstName = prompt ('Quale è il suo nome?')
console.log(firstName)

// 2.chiedere cognome passeggero
let secondName = prompt ('Quale è il suo cognome?')
console.log(secondName)

// 3.chiedere età passeggero
let ageClient = parseInt(prompt ('Quanti anni ha?'))
console.log(ageClient)

// 4.chiedere chilometri da percorrere
let kmTravelled = parseInt(prompt('Quanti chilometri percorrerà?'))
console.log(kmTravelled)

// 5.moltiplicare i chilometri percorrenza per il prezzo (0,21 cent)
let totPrice = kmTravelled * 0.21
console.log(totPrice)

// applicare sconto in caso di minore eta o ultra 65
let discountedPrice

let discountOver65 = 0.6

let discountUnderage = 0.8

if (ageClient > 65) {
    console.log(discountedPrice = totPrice * 0.6)
}

if (ageClient < 18) {
    console.log(discountedPrice = totPrice * 0.8)
}

// calcolare prezzo totale (km x 0,21 - % sconto ) senza numeri decimali infiniti ma solo con euro e centesimi