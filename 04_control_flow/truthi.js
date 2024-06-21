const userEmail = "hitesh.ai";


if  (userEmail){
    console.log("got user email ");
}else{
    console.log("dont have user email");
}

// falsey values :

// false 
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

// truthy values
// "0" 
// 'false'
// " "
// []
// {}
// function(){} //empty function


// userEmails = []
// if (userEmails.length ===0){
//     console.log("array is empty");
// }

// const userinfo ={}

// if(Object.keys(userinfo).length === 0 ){
//     console.log("obj is empty");
// }

// false == 0 ; //true
// false == '' //true 
// 0  == ''//true

// nullish coalescing operator   (??) :null undefiner

// let val1  ;
// // val1 = 5 ?? 10 //5
// // val1 = null(recieved from server or third party) ?? 10 //null

// val1 = undefined ?? 15 //undefined
// val1 = null ?? 10 ?? 30 //10

// console.log(val1);


// ternary operator 
// small synatax of if else 
// condition ? true : false

// const  TeaPrice =200;

// TeaPrice >=100 ? console.log("yes") : console.log("no");