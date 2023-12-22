let kmUtente = prompt("Inserisci i kilometri che vuoi percorrere");
let etàUtente = prompt("Inserici qua la tua età");

let ticketPrice = kmUtente * 0.21;
let fixedPrice = parseFloat(ticketPrice).toFixed(2);
console.log(fixedPrice);

// DISCOUNT 20%
let discount1 = (fixedPrice * 20)/100;
let fixedDiscount1 = parseFloat(discount1).toFixed(2);
console.log(fixedDiscount1);

// DISCOUNT 40%
let discount2 = (fixedPrice * 40)/100;
let fixedDiscount2 = parseFloat(discount2).toFixed(2);
console.log(fixedDiscount2);



// CALCOLO BIGLIETTO
if (etàUtente < 18){
    document.writeln(`Questo è il prezzo del tuo biglietto: ${(fixedPrice - fixedDiscount1)}`)
} else if (etàUtente >= 65){
    document.writeln(`Questo è il prezzo del tuo biglietto: ${(fixedPrice - fixedDiscount2)} `)
} else{
    document.writeln(`Questo è il prezzo del tuo biglietto: ${fixedPrice}`)
}



