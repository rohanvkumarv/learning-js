function multiplyBy5 (num){
 return num *5
}

multiplyBy5(5)
multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// in js everthing is Object getting its things from parent and parent and so 
// on called prototyping
// so array string evertgibg is Object
// array has same things like strings
// its just matters ki uskko konsi  use karni apni parent ki properties


// function bhi object hai par yeh function bhi hai has both propeties
// har kisi ka apna function hai ek par at the end object hi hai 
// and object wali properties bhi hai and object ki tarah bhi use ho sakta
// hai

function createUser (username,score){
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function (){
    this.score ++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/