// CREAZIONE PROMPT
let userChoice = (prompt("Pari o Dispari?").trim()).toLocaleLowerCase();
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5").trim());

// CONTROLLI PROMPT
while(userChoice !== "pari" && userChoice !== "dispari"){
    userChoice = (prompt("Pari o Dispari?").trim()).toLocaleLowerCase();
}
while(isNaN(userNumber) || userNumber > 5 || userNumber < 1){
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5").trim());
}

// GENERAZIONE FUNCTION
function  rundomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function oddOrEven(a, b){
    let sum = a + b;
    if(sum % 2 === 0){
        return "pari";
    }
    return "dispari";
}

// UTILIZZO FUNCTION
let compNumber = rundomNumber(1, 5);
console.log(compNumber)
let result = oddOrEven(userNumber, compNumber)
console.log(result)

// DICHIARAZINE VINCITORE
if(result === userChoice){
    console.log("Hai vinto")
} else {
    console.log("Hai perso")
}
