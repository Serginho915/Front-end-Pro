let day = new Date().getDate() ;
let month = new Date().getMonth();
    month++;
let year = new Date().getFullYear();
let date = day + '.' + month + '.' + year;
let captionString = (`Food prices for ≠ ` + date);

let currency = 'UAH';


let kiwi = '🥝';
let kiwiPrice = 15;
let kiwiCount = 10;
let kiwiCountryPercent = 10;
    kiwiCountryPercent = kiwiPrice + (kiwiPrice * kiwiCountryPercent / 100);
let finalKiwiPrice = +( kiwiCountryPercent * kiwiCount).toFixed();


let orange = `🍊`;
let orangePrice = 12;
let orangeCount = 2;
let orangeSalePercent = 3;
let finalOrangePrice = +(orangePrice * orangeCount) - (((orangePrice * orangeCount) / 100) * orangeSalePercent ).toFixed();

let apple = `🍎`;
let applePrice = 10;
let appleCount = 3;
let appleSalePercent = 7;
let finalApplePrice = +(applePrice * appleCount) - (((applePrice * appleCount) / 100) * appleSalePercent ).toFixed();

let priceAllProducts = finalKiwiPrice + finalOrangePrice +finalApplePrice;

console.log(captionString.replace('≠' , '-'));
console.log('Food price for:' + ' ' + kiwiCount + ' ' + kiwi + ' =' +   ' ' + finalKiwiPrice + ' ' + currency);
console.log('Food price for:' + ' ' + orangeCount + ' ' + orange + ' =' +   ' ' + finalOrangePrice + ' ' + currency);
console.log('Food price for:' + ' ' + appleCount + ' ' + apple + ' =' +   ' ' + finalApplePrice + ' ' + currency);
console.log('Final price for all products = ' + priceAllProducts + ' ' + currency);