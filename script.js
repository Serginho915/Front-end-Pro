const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]
function summerValue(value){
	return value*0.8;
}

function winterValue(value){
	return value*2;
}

function sumOfProductsFunc(arr){
	let sum = 0;
	for (let i = 0; i < arr.length ; i++) {		
		sum += arr[i][1];	
	} 
	return sum;
}
function getPrice(products, summerValue){
	let copiedPrice = [...products];
	let sumOfProducts;
		if(typeof summerValue === `function`){
	        for (let i = 0; i < copiedPrice.length; i++) {
				for (let j = 0; j < copiedPrice[i].length; j++) {
					if(typeof copiedPrice[i][j] === `number`)copiedPrice[i][j] = summerValue(copiedPrice[i][j]);
				}
			} 
			return copiedPrice;
	    } else{
			sumOfProducts = sumOfProductsFunc(copiedPrice);
	
			return sumOfProducts;
	    }

}
console.log( getPrice(products));
