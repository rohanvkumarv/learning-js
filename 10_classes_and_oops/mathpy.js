const Descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


// console.log(Descriptor);

// we can make our pi value 
// const MynewObject = Object.create(n)

const chai = {
    name :"Ginger Chai",
    price:150,
    isAvailable:true,

    OrderChai : function(){
        console.log("chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key} ,${value}`);
    }
}

Object.defineProperty(Math,"PI",{
    writable:true,
    enumerable: false,
    
})
