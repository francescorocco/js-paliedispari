let userWord = prompt('Scrivi una parola per vedere se è palindroma');


console.log(palindromeCheck(userWord));

//parola
//012345
//123456

function palindromeCheck(parola){
    let i = 0;
    let x;

    while( i <= parola.length - 1){ //0
        
        let c = parola.length - 1;

        if(i < parola.length && parola[i] == parola[c]){ //0
            i++;
            c--;
            console.log(i);
        }else if( i == parola.length - 1){
           x = 'è palindromo';
            console.log(`${parola}'è palindromo'`);
            i++;
        }else{
            x = 'non è palindromo';
            console.log(`${parola}'non è palindromo'`);
            i = parola.length;
        }

    }
    return x;
}