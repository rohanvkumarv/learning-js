// objects and events to master js ,,,

// ways to declare 
// singleton  only one instance
// literals ki taraf singleton nhi banta
// constructor se signle ton banta
// Object.create / /
// object literals  only diff is of singleton

const mysym1 = Symbol("key1")
const jsUser ={
    name:"hitesh",
    
    // by dafault  "name":"hitesh" name is string but we dont have to specify
    mysymb1:"key1",
    [mysym1]:"key1", //correct syntaxx  
    age:18,
    location : "gujarat",
    isLoggedIn :false,
    lasLoginDays : ["mondya", "saturday"],
    "full-name" : "rohan kumar"


}






// can define key and value  
// myarray = ['h','e']

// console.log(jsUser.location);
// console.log(jsUser["location"]);


// // console.log(jsUser.full-name); not allowed 
// console.log(jsUser["full-name"]); 
// // console.log(typeof jsUser.mysymb1);  // not used as symbol 
// console.log(typeof jsUser[mysym1]);  

// jsUser.location ="agra";
// console.log(jsUser.location);
// Object.freeze(jsUser) 
// jsUser.location ="Mathura";
// console.log(jsUser.location);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting) //[Function (anonymous)]
console.log(jsUser.greeting())
console.log(jsUser.greeting2())
