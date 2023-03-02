let userWord = prompt('Scrivi una parola per vedere se è palindroma');

palindromeCheck(userWord)



function palindromeCheck(parola){
    let c = parola.length - 1;
    let i = 0;
    while( i <= parola.length - 1){
        if(parola[i] == parola[c]){
            i++;
            c--;
        }else if( i == parola.length){
            
        }
    }
}