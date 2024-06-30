// //ES6
// //  only syntactical sugar........classes

// class User {
//     constructor(username,email,password,){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("username","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene 

function Users (username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
Users.prototype.encryptPassword = function(){
      return `${this.password}abc`
}
Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new  Users("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
