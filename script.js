
const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getMoney =  new Promise(
        function(resolve, reject) {
        let userChoice = confirm(`Do you want check balance?`);
         userChoice ? resolve() : reject();
      });



getMoney
    .then(
        ()=>{

            let curr;
            do{
                 curr = prompt(`enter currency`)
              } 
              while (!(curr in userData) );
            console.log(`Your balance is ${userData[curr]} ${curr}`)
        },
        ()=>{
            let cash;
             
            do{
                cash = prompt(`choose currency`)
            }
            while (!(cash in bankData) && !(cash in userData) );
            if(bankData[cash].max <= 0) {
                console.log(`ATM hasnt this currency`)

            }
            let amount = prompt(`enter amount`)

            if(amount > bankData[cash].max || amount > userData[cash]) console.log(`The amount entered is greater than available. Max amount: ${userData[cash]} ${cash}`)
            else if(amount < bankData[cash].min) console.log(`The amount entered is less than available. Min amount: ${bankData[cash].min}  ${cash}`)
            else console.log(`Take yours ${amount} ${cash}`)

        }

)
.finally(
    console.log(`Have a nice day!`)
)
