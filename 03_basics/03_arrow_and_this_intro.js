const user  ={
    username : "hitesh",
    price :999,

    welcomeMessage : function () {
        console.log(`${this.username} welcome to website`);

        // console.log(this);

       

        
    }

}

// this - current instance 

// user.welcomeMessage()
// user.username = "rohan";
// user.welcomeMessage()

 // output of this :hitesh welcome to website
        // {
        //   username: 'hitesh',
        //   price: 999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }
        // rohan welcome to website
        // {
        //   username: 'rohan',
        //   price: 999,
        //   welcomeMessage: [Function: welcomeMessage]
        // }


console.log(this); // it refers to empty object 
// in browser it refers to window object which is used to interact with browser 


// function  chai() {
//    let username = "rohan"
//    console.log(this.username);

// //    this does not works inside functions 
// }
// chai()


// const chai = function (){
//     let username = "rohan"
//   console.log(this.username);
// }

const chai =  () => {
    let username = "rohan"
    // console.log(this);
}

// diff b/w arrow and normal function 
// this keyword is not used in any of them
// pure arrow functuuon now  

// () => {} 



const addTwo  = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(19,23))



 
// implicite   return- return likhna nhi padh rha
// if curly braces are used  this keyword wil be used if not then it wont be used 
const addThree  = (num1,num2) =>  num1+num2

// const addThree  = (num1,num2) =>  (num1+num2)
// const addThree  = (num1,num2) =>  ({username : "rohan"})

console.log(addThree(19,23))



arr = [23,55,35,32,5,2,4,23,]

// arr.forEach(()=> )