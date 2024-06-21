// a block of code packing a block of code that can be used mutliple TimeRanges
// by callling it  




function say_my_name(){
    console.log("h");
    console.log("h");
    console.log("i");
    console.log("5");

}

// say_my_name(); //execution
// say_my_name // reference 

// no need to give type of parameters 
function add_two_numbers(num1,num2){
 
        // console.log(num1+num2);
        // let result= num1+num2;
        // return result;
        // console.log(result);// nothing will be executed after return keyword
          return num1+num2

}
// add_two_numbers(3,5)
// add_two_numbers(3,"4")
// add_two_numbers(3,"a")
// add_two_numbers(3,null)

// parameters vs arguments 

// values which function reciecev are called paramets
// values whihc are passed on calling are called arguments

const result = add_two_numbers(3,5)
// console.log("result " , result);
// result  undefined   we are not getting written


function login_user (username = "same"){
    // if(!(username === undefined){
    if(!username){
        console.log("enter a username");
        return

    }
     return `${username } just logged in `

    
}

// console.log(login_user("rohan"))
// console.log(login_user()) 
// output :result  undefined  




// second lec on functions 
// ... rest and spread operator  
function CalculateCartPrice(val1,val2,...num1){
    return num1;
}
// CalculateCartPrice(2)
// console.log(CalculateCartPrice(2,400,500));
// how to pass multiple values to function 


const user  = {
    username :"hitesh",
    price:900,
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username :"hitesh",
    price:900,
})



const myarr = [100,2000,355,22,21,]
function returnSecondValue (getarraay){
    return getarraay[2]
}
console.log(returnSecondValue(myarr));
console.log(returnSecondValue(
    [100,2000,355,22,21,]

));







