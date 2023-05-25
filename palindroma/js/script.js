// CREAZIONE PROMPT
let userInput = ((prompt("Inserisci la parola che vuoi controllare")).trim()).toLocaleLowerCase();

// OPERAZIONI DI REVERSE DELL'INPUT
let arrayInput = userInput.split('');
let arrayReverse = arrayInput.reverse();
let userInputReverse = arrayReverse.join('');

// CONTROLLO DEL PALINDROMO E STAMPA DEL RISULTATO
if(userInput === userInputReverse){
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")
}