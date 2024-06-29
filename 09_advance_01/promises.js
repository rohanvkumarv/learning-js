// fetch("https://api.github.com/users/ditinagrawal".then().catch().finally())
// first promise work was done using a library 
// now it is included in js only ;


// creation of promises 
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    //db calls,cryptography,networkcall
    setTimeout(() => {
        console.log('async task is completed');
        resolve()
    }, 1000);
})

// consumption 

promiseOne.then(function(){
    console.log("promise consumed");
})



new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2");
    }, 1000);
}).then(function () {

    console.log("asycn 2 resolved ");
})

const promiseThree  = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"chai",email:"chai@example.com"})
    }, 1000);
})
promiseThree.then(function (user) {
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
   setTimeout(() => {
    let error = false;
    
    if(!error){
        resolve({username:"rohan",pass:"123"})
    }else{
        reject("error something went wrong")
    }
    
   }, 1000);
})

promiseFour
.then((user)=>{
   console.log(user);
   return user.username
})
.then((Myusername)=>{
  console.log(Myusername);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("promise is either solved or either rejected");
})


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        
        if(!error){
            resolve({username:"js",pass:"123"})
        }else{
            reject("js something went wrong")
        }
       }, 1000);
})

async function consumerPromiseFive(){

    // const Response = await PromiseFive
    // console.log(Response);

    try {
        const Response = await PromiseFive
        console.log(Response);
    } catch (error) {
        console.log(error);
    }
}
consumerPromiseFive()

// async function GetAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data  = await response.json() //this is also taking time
//     } catch (error) {
//         console.log("error:",error);
//     }
    
// }
// GetAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
   console.log(error);
})

// fetch returns a promise that is resolve reject status of a asycn func 