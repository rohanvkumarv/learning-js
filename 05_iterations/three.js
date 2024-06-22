// array specific loops 

// for of loop 

// ['','','','','','','','']
// [{},{},{}]

const arr = [1,2,3,4,5,5,6,]

for (const num  of arr) {
    //  console.log(num);
}

const greetings = "hello"
for (const char of greetings) {
    // console.log(char);
}

//maps 
// no duplicate values ,lifo order of items  //

const map = new Map()
map.set("IN","india")
map.set("us","usa")
map.set("fr","france")
map.set("IN","india")
// console.log(map);

for (const key of map) {
    console.log(key);
    
}
// [ 'IN', 'india' ]
// [ 'us', 'usa' ]
// [ 'fr', 'france' ]

for (const  [key,value] of map) {
    console.log(key ,value);
}

// const myObj = {
//     "game1" :"nfs",
//     "game2" : "Spiderman"
// }

// for (const [key,values] of myObj) {
//     console.log(key,values);
    
// } not for objects


