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
let kmPrice = kmTravelled * 0.21 + '€'
console.log(kmPrice)
// applicare sconto in caso di minore eta o ultra 65
let discont
if ageClient > 65 {
    kmPrice = kmTravelled * 0.21 - 40% =
}
// calcolare prezzo totale (km x 0,21 - % sconto ) senza numeri decimali infiniti ma solo con euro e centesimi