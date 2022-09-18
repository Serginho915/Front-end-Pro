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
let finalArray = [];
let Product = {
	getPrice(arr){
		  arr.map(obj => {
            if(obj.season) return obj.price *= this.seasonKoef;
            else  return obj.price;
        });
		
	},

	getInfo(arr){
        this.getPrice(arr);
        arr.forEach(obj => {
            finalArray.push(`Product${obj.icon} ${obj.name}.Type ${this.type}. Price ${obj.price}`);
             return finalArray;
        });
	}
};

const makePrototype = (arr, objectProto) => objectProto.getInfo(arr);
const renderList = (arr) => arr.forEach(item => console.log(item));


const Vegetable = Object.create(Product);
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;

const Fruit = Object.create(Product);
Fruit.type = `Fruit`;
Fruit.seasonKoef = 2;

makePrototype(vegetables,Vegetable);
makePrototype(fruits,Fruit);
renderList(finalArray);
