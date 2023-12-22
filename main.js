// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

/*
    PASSAGGI
    1- prompt per chiedere all'utente i km e l'età
    2- calcolo prezzo biglietto
        2a- km * 0,21€= pb
    3- utilizzare un if e else if 
        3a- se età < 18; pb*20%
        3b- se età > 65; pb*40%
        3c- prezzo pieno
    
*/ 

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



