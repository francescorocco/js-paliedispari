// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let betChoice = prompt('Scrive se puntare su pari o dispari');
console.log(betChoice);

let userNumber = parseInt(prompt('Scrivi un numero da 1 a 5'));
console.log(userNumber);

let pcNumber = randomNumber();
console.log(pcNumber);


let sumNumber = userNumber + pcNumber;


if (betChoice == 'pari' && oddEven(sumNumber) == 'Pari'){
    console.log('Hai vinto');
}else if(betChoice == 'dispari' && oddEven(sumNumber) == 'Dispari'){
    console.log('Hai vinto');
}else{
    console.log('Hai perso')
}


function randomNumber(){
    let pickNumber = Math.floor((Math.random() * 5) + 1);
    return pickNumber;
}

function oddEven (numero){

    let oddEvenResoult;

    if (numero % 2 == 0){
        oddEvenResoult = 'Pari';
    }else{
        oddEvenResoult = 'Dispari';
    }

    return oddEvenResoult;
}