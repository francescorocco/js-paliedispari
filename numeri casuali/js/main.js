// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let betChoice;

let i = 0;
while ( i < 1 ){
    betChoice = prompt('Scrive se puntare su Pari o Dispari');
    
    if(betChoice == 'pari' || 'dispari' || 'Pari' || 'Dispari' || 'PARI' ||'DISPARI'){
        i++;
    }
};


console.log(betChoice);

let userNumber;

let c = 0;
while (c < 1){
    userNumber = parseInt(prompt('Scrivi un numero da 1 a 5'));

    if(userNumber == 1 || 2 || 3 || 4 || 5){
        c++
    }
};

console.log(userNumber);

let pcNumber = randomNumber();
console.log(pcNumber);


let sumNumber = userNumber + pcNumber;


if (betChoice == 'pari' || 'Pari' || 'PARI'  && oddEven(sumNumber) == 'Pari'){
    console.log('Hai vinto');
}else if(betChoice == 'dispari' || 'Dispari' ||'DISPARI' && oddEven(sumNumber) == 'Dispari'){
    console.log('Hai vinto');
}else{
    console.log('Hai perso');
};


function randomNumber(){
    let pickNumber = Math.floor((Math.random() * 5) + 1);
    return pickNumber;
};

function oddEven (numero){

    let oddEvenResoult;

    if (numero % 2 == 0){
        oddEvenResoult = 'Pari';
    }else{
        oddEvenResoult = 'Dispari';
    }

    return oddEvenResoult;
};