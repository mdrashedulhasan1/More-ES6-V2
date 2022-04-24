const products = [
    { name: 'Water bottol', price:50, color:'yellow'},
    {name: 'Mobile Phone', price:1000, color: 'white'},
    {name: 'rope', price:15, color: 'green'},
    {name:'laptop', price:5000, color: 'tomato'},
    {name:'chair', price:300, color: 'gray'},
    {name:'light', price:20, color: 'white'},
    {name:'picture', price:30, color: 'salmon'}
 ]

 const biggerPrice = products.find(product => product.price > 50);
 console.log(biggerPrice);

 const onlyLaptop = products.find(product => product.name == 'laptop');
 console.log(onlyLaptop);