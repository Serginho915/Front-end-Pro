let arr  = [];

let lengthArr = +prompt('Enter length of array');

if(lengthArr){
    while(lengthArr < 2 || lengthArr > 10){
        lengthArr = prompt('Enter length of array');
    }
    
    if(lengthArr < 0 ) lengthArr = Math.abs(lengthArr);
    if(!(lengthArr % 1 === 0))  lengthArr = Math.round(lengthArr);

    arr = [lengthArr];
}
let minElem = +prompt('Enter min value');
while(minElem > 10 || minElem < -10){
    minElem = +prompt('Enter min value');
}
if(!minElem % 1 === 0) minElem = Math.round(minElem);

let maxElem = +prompt('Enter max value');
while(maxElem > 50 || maxElem < minElem){
    maxElem = +prompt('Enter max value');
}
if(!maxElem % 1 === 0) maxElem = Math.round(maxElem);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(minElem);
    max = Math.floor(maxElem);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i=1; i<=lengthArr - 1; i++){
        arr[arr.length] = getRandomIntInclusive(minElem, maxElem);
    }

let minEl = maxEl = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] < minEl){
        minEl = arr[i];
    }

    if(arr[i] > maxEl){
        maxEl = arr[i];
    }
}

let indexOfMin = arr.indexOf(minEl);
let indexOfMax = arr.indexOf(maxEl);
let tempVal = arr[indexOfMin]; 
arr[indexOfMin] = arr[indexOfMax];
arr[indexOfMax] = tempVal;

console.log(arr);
console.log(minEl, maxEl);