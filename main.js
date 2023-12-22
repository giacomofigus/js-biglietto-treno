let kmUtente = prompt("Inserisci i kilometri che vuoi percorrere");
let etàUtente = prompt("Inserici qua la tua età");

let ticketPrice = kmUtente * 0.21;
let fixedPrice = parseFloat(ticketPrice).toFixed(2);

// DISCOUNT 20%
let discount1 = (fixedPrice * 20)/100;
let fixedDiscount1 = parseFloat(discount1).toFixed(2);

// DISCOUNT 40%
let discount2 = (fixedPrice * 40)/100;
let fixedDiscount2 = parseFloat(discount2).toFixed(2);

let prezzoBiglietto1 = fixedPrice - fixedDiscount1
let prezzoBiglietto2 = fixedPrice - fixedDiscount2


// CALCOLO BIGLIETTO
if (etàUtente < 18){ 
    document.getElementById("boxPrezzo").innerHTML = `€ ${prezzoBiglietto1}`
} else if (etàUtente >= 65){
    document.getElementById("boxPrezzo").innerHTML = `€ ${prezzoBiglietto2}`
} else{
    document.getElementById("boxPrezzo").innerHTML = `€ ${fixedPrice}`
}






