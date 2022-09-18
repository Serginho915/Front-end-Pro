const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    },

];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }

];

let Product = {
	getPrice(arr){
		  arr.map(obj => {
            debugger;
            if(obj.season) return obj.price *= this.seasonKoef;
            else  return obj.price;
        });
		
	},

	getInfo(arr){
        this.getPrice(arr);
        arr.forEach(obj => {
            return str =`Product ${obj.icon}${obj.name}.Type ${this.type}. Price ${obj.price}`;
        });
	}
};

makePrototype(arr, objectProto){

}



const Vegetable = Object.create(Product);
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;

const Fruit = Object.create(Product);
Vegetable.type = `Fruit`;
Vegetable.seasonKoef = 2;




