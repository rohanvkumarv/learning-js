// let  a =10
// const b=20
// var  c=30



// var c =3000; defines in global space  
let a=220; // jaha define karo vahi par chalega variable 
// const b=200;
if (true){
    let  a =10
    const b=20
    var  c=30
    // console.log(a);
}




// console.log(a);   //a is  not defined
// console.log(b);   //b is not defined
// console.log(c);     // defines variable in global scope


// { //scope,block, not in obj

// block scope  
// variable defined in block shouldnt go outside vice versa is not same 

// }
// global scope 


// node and browser scope is diff 



// second lecturee 

function one(){
    const username = "hitesh"
    function two  (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    // two()
}
// in nested scopes child can accept values from parent not vice versa /
one()





if (true){
    const username ="hitesh";
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);.


// ............interesting  ...................... .... .

// two types of function declarations 
// hoisting   
console.log(addone(5))
function addone (num) {
    return num+1;
    
}
console.log(addtwo(5))
const addtwo = function (num){
    return num+2;
}
