// 1.chiedere nome passeggero
let firstName = prompt ('Quale è il suo nome?')

console.log(firstName)

const firstNameTicket = document.getElementById('firstname')

firstNameTicket.innerHTML = firstName

// 2.chiedere cognome passeggero
let secondName = prompt ('Quale è il suo cognome?')

console.log(secondName)

const secondNameTicket = document.getElementById('secondname')

secondNameTicket.innerHTML = secondName

// 3.chiedere età passeggero
let ageClient = parseInt(prompt ('Quanti anni ha?'))

console.log(ageClient)

const AgeClientTicket = document.getElementById('ageclient')

AgeClientTicket.innerHTML = ageClient

// 4.chiedere chilometri da percorrere
let kmTravelled = parseInt(prompt('Quanti chilometri percorrerà?'))

console.log(kmTravelled)

const kmTravelledTicket = document.getElementById('kmtravel')

kmTravelledTicket.innerHTML = kmTravelled

// 5.moltiplicare i chilometri percorrenza per il prezzo (0,21 cent)
let totPrice = kmTravelled * 0.21

console.log(totPrice)

const totPriceTicket = document.getElementById('totalprice')

totPriceTicket.innerHTML = totPrice


// applicare sconto in caso di minore eta o ultra 65
let discountedPrice

if (ageClient > 65) {
    (discountedPrice = totPrice * 0.6).toFixed(2)
}

if (ageClient < 18) {
    (discountedPrice = totPrice * 0.8).toFixed(2)
}

const discountedPriceTicket = document.getElementById('pricediscounted')

discountedPriceTicket.innerHTML = discountedPrice

let discountOver65 = '40%'

const discountTicket65 = document.getElementById('discount')

if (ageClient > 65) {
    discountTicket65.innerHTML = discountOver65 
}

let discountUnderage = '20%'

const discountTicket18 = document.getElementById('discount')

if (ageClient < 18) {
    discountTicket18.innerHTML = discountUnderage
}

// calcolare prezzo totale (km x 0,21 - % sconto ) senza numeri decimali infiniti ma solo con euro e centesimi