// const score =100;
// const balance = new Number (100);
// console.log(balance);
// // if u r telling its a num it will  explicitly tell too 
// console.log(score);
// // prototype properties

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// const anothernum = 23.8992;
// console.log(anothernum.toPrecision(3));
// // gives round of value to specified number of digits 
// const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-In'));

// ...................maths ............................
// console.log(Math); 
// // in console log see properties and methods 
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.min(4,4,6,2,21,5,6));
// console.log(Math.max(4,4,6,2,21,5,6));

console.log(Math.random());
// always retunr value in zero to one 

console.log(Math.random()*10);
console.log((Math.random()*10)+1);  // avoid zero 
console.log(Math.floor((Math.random()*10)+1)); //round off value to one digit
const min = 10;
const max = 20;

(Math.random() * (max - min  +1) )


console.log(Math.floor(Math.random() * (max - min + 1)) + min);
