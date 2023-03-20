// prezzo del biglietto per km(0,21)
const priceKm = 0.21;
console.log('priceKm' , priceKm);

//sconto del 20% per i minorenni
const discount20 = 20;
console.log('discount20');

//sconto del 40% per gli over 65
const discount40 = 40;
console.log('discount40');

// età dell'utente 
const age = prompt ("Inserisci la tua età");
console.log('age' , age);

//km che deve percorrere l'utente
const kmUser = parseInt(prompt('Inserisci i km da percorrere' , 100));
console.log('kmUser' , kmUser);



//calcolo pricekm x kmuser
let price = priceKm * kmUser;
console.log('price' , price)

//calcolo sconto per under 18 e over 65
if (age < 18) {
    newPrice = price - (price / 100 * discount20);
    console.log('discount under 18')
}else if (age > 65) {
    newPrice = price - (price / 100 * discount40);
    console.log('discount over 65')
}

let newPrice = price;
console.log('newPrice' , newPrice);

