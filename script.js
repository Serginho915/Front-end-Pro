class Bulka{
    constructor(name, size, ingredients = [`cutlet`, `salada`, `tomato`]){
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;

    }

    setAdditionalIngredients(...arr){
        arr.map( item =>{
            this.ingredients.push(item);
        })
       
    }
}

class Cheeseburger extends Bulka{
    constructor(name, size, ingredients = [`cutlet`, `salada`, `tomato` , `cheese`]){
        super(name, size, ingredients);
    }
}



let Humburger = new Bulka(`Humburger`, `small`);
Humburger.setAdditionalIngredients(`egg`, `onion`);


let myCheeseburger = new Cheeseburger(`Cheeseburger`, `small`);
myCheeseburger.setAdditionalIngredients(`egg`, `onion`);
console.log(myCheeseburger);
