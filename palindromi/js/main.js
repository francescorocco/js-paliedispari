let userWord = prompt('Scrivi una parola per vedere se è palindroma').replace(/ /g,'');

console.log(userWord);

console.log(palindromeCheck(userWord));



function palindromeCheck(parola){
    let i = 0;
    let palindrome = false;
    let c = parola.length - 1;

    while( i <= parola.length ){ 
        
        if(i > c){
        palindrome = true;
        i = parola.length + 1;

        }else if(i < parola.length - 1 && parola[i] == parola[c]){ 
            i++;
            c--;

        }else{
        i = parola.length + 1;
        }
    }

    if (palindrome == true){
        palindrome = 'La parola è palindroma';
    }else{
        palindrome = 'La parola non è palindroma';
    }

    return palindrome;
}