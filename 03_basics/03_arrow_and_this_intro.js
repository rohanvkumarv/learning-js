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
    console.log(this);
}