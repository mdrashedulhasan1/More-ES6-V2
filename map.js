// const numbers = [2, 3, 4, 5];
// const output = [];
// for(const number of numbers){
//     const result = number*2;
//     output.push(result);
// }
// console.log(output);



// const doubleIt = (number) => number*2;
// const numbers = [2, 3, 4, 5];
// const output = [];
// for(const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);


// const doubleIt = number => number*2;
// const numbers = [2, 3, 4, 5];
// const output = numbers.map(doubleIt);
// console.log(output);

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(x => x*x);
// console.log(squares);


// const nameList = ['rakib', 'sakib', 'sofik', 'tofik'];
// const allName = nameList.map(list => list);
// console.log(allName);

const products = [
   { name: 'Water bottol', price:50, color:'yellow'},
   {name: 'Mobile Phone', price:1000, color: 'white'},
   {name: 'rope', price:15, color: 'green'},
   {name:'laptop', price:5000, color: 'tomato'},
   {name:'chair', price:300, color: 'gray'},
   {name:'light', price:20, color: 'white'},
   {name:'picture', price:30, color: 'salmon'}
]

const allProductsName = products.map(product => product.name);
const allProductsPrice = products.map(product => product.price);
const allProductsColor = products.map(product => product.color);
console.log(allProductsName);
console.log(allProductsPrice);
console.log(allProductsColor);