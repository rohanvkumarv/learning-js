// let myName = "rohan    "
// let Channel = "chai    "
// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.truelength);
// creating property for everyone 
//  a method 


let myHeroes = [ "spiderman" , "thor"]

let heroPower = {
    thor :"hammer",
    spiderman :"sling",

    getSpiderPower :function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}



// adding function into grandparent obj not on the function or array or 
// string obj 

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objs");
}
heroPower.hitesh()

myHeroes.hitesh()

// if method given to  obj it will pass on to array function string all 
// but if is it true vice virsa ? lets find out  - ans no


Array.prototype.heyHitesh = function(){
 console.log('hitesh says hello');
}
myHeroes.heyHitesh()
// heroPower.heyHitesh() 

// inheritance 

const user = {
    name:"chai",
    email:"chai@google.com"
}
const teacher =   {
    makeVideo :true,

}
const teachingSupport = {
    isAvailable:false
}

const TAsupport = {
    makeAssignment :"js assignment ",
    fulltime :true,
    __proto__ : teachingSupport

}

teacher.__proto__ = user

//modern syntax


Object.setPrototypeOf(teachingSupport,teacher)


let AnotherUserName  = " chai aur code "

String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`true lenght is ${this.trim().length}`);
}

AnotherUserName.truelength()

"hitesh".truelength()

