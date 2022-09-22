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
debugger;
let finalArray = [];
let Product = {
    getInfo(){
        debugger;

        return `Product${this.icon} ${this.name}.Type ${this.type}. Price ${this.getPrice()}`;
    },
    getPrice(){
        debugger;
        let priceKF = 0;
        if(this.season) priceKF = this.price * this.seasonKoef;
        else priceKF = this.price
        return priceKF;
    }
}

function makePrototype(arr, objectProto){
    debugger;
    arr = JSON.parse(JSON.stringify(arr));
    return arr
        .map(product => {
            let newObj = Object.create(objectProto); 
            Object.assign(newObj, product); 
            return newObj;
        })
}

function renderList(arr){
    debugger;
    let LIs = arr
        .map(product => `<li>${product.getInfo()}</li>`)
        .join(``);
    return `<ul>${LIs}</ul>`;
}


const Vegetable = Object.create(Product);
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;

const Fruit = Object.create(Product);
Fruit.type = `Fruit`;
Fruit.seasonKoef = 2;

document.write(renderList(makePrototype(fruits,Fruit)));
