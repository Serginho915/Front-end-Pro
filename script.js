const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
} 


function convert(obj){

	let objCopy ={};
	
	for (let key in obj) {
		if (!(typeof (obj[key]) == "object")){
			
		objCopy[key] = JSON.parse(JSON.stringify(obj[key]));
			
		}
		else{
			Object.assign(objCopy, obj[key])
			convert(obj[key])
		}
		
	}

	return objCopy;
}


console.log(convert(obj)) ;
