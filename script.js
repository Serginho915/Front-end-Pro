
let formatStr;
let globalStr = '';
let str;
let allow = confirm(`Tell me three most important words 💚`);

if(allow){
        for( let i = 0; i <3; i++){
            let regexp = /\d/;
        
        str =prompt('Enter word')
        while((str.match(regexp))){
            str = prompt('Enter word'); 
        } 
        
    formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
    while(!(formatStr === 'uppercase' || formatStr === 'lowercase' || formatStr === 'capitalize')){
        formatStr = prompt('Enter format of word (uppercase/lowercase/capitalize)');
        }    
        if(formatStr === 'uppercase' ){
            str = str.toUpperCase();
        }

        else if(formatStr === 'lowercase'){
            str = str.toLowerCase();
        }
        
        else if(formatStr === 'capitalize'){
            str = str.charAt(0).toUpperCase() + str.slice(1);
        }
        
        
        if(i ===2){
            globalStr += str + '!';
        }
        else{
            globalStr += str + ' ';
            formatStr = '';
        }

    }

}
    console.log(globalStr);
    
    
    
    
    
    
    
    
    
    
    
    
    