"use strict";

const list = document.querySelector(".list")

// Creo un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
    //Creo l'elemento
    const item = document.createElement("li");
    //Aggiunto classe item
    item.classList.add("item");
    console.log(i);
    //Per i multipli di 3 e di 5 stampo, in console, la stringa "fizzbuzz"
    if ( i % 3 === 0 && i % 5 === 0 ) {
        item.classList.add("fizzbuzz");
        console.log("fizzbuzz");
    }
}