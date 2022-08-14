let firstWord;
let secondWord;
let thirdWord;
let formatStr;
let allow = confirm(`Tell me three most important words 💚`);

if(allow){
    let regexp = /\d/;
    
    firstWord = prompt('Enter first word');
    while((firstWord.match(regexp))){
         firstWord = prompt('Enter first word'); 
    } 
    
    formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    while(!(formatStr === 'uppercase' || formatStr === 'lowercase' || formatStr === 'capitalize')){
        formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    }    
        if(formatStr === 'uppercase' ){
            firstWord = firstWord.toUpperCase();
        }

        else if(formatStr === 'lowercase'){
            firstWord = firstWord.toLowerCase();
        }
        
        else if(formatStr === 'capitalize'){
            firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
        }
        formatStr = '';


    secondWord = prompt('Enter second word');
    while((secondWord.match(regexp))){
        secondWord = prompt('Enter second word'); 
    }     
    formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    while(!(formatStr === 'uppercase' || formatStr === 'lowercase' || formatStr === 'capitalize')){
        formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    }            
        if(formatStr === 'uppercase' ){
            secondWord = secondWord.toUpperCase();
        }
    
        else if(formatStr === 'lowercase'){
            secondWord = secondWord.toLowerCase();
        }
            
        else if(formatStr === 'capitalize'){
            secondWord = secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
        }
        formatStr = '';
    

    thirdWord = prompt('Enter third word');


    while((thirdWord.match(regexp))){
        thirdWord = prompt('Enter third word'); 
    }     
    formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    while(!(formatStr === 'uppercase' || formatStr === 'lowercase' || formatStr === 'capitalize')){
        formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    }            
        if(formatStr === 'uppercase' ){
            thirdWord = thirdWord.toUpperCase();
        }
    
        else if(formatStr === 'lowercase'){
            thirdWord = thirdWord.toLowerCase();
        }
            
        else if(formatStr === 'capitalize'){
            thirdWord = thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1);
        }
        formatStr = '';

    console.log(`${firstWord} ${secondWord} ${thirdWord}!`);
}



