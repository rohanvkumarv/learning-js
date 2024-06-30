// what is obj literal 

const user = {
    username : "hitesh",
    loginCount :8,
    signedIn : true,
    GetUserDetails:function(){
        // console.log(`username ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.GetUserDetails());

// console.log(this);

// constructor function 


function User (username,loginCount,isloggedin){
   this.username = username
   this.loginCount = loginCount
   this.isloggedin = isloggedin

   this.greeting = function(){
    console.log(`welcome ${this.username}`)
   }

//    return this
}

const userone = new User("hitesh",12,true)
const userTwo = new User("chaiaurcode",11,false)
// console.log(userone); //override value over first one
// console.log(userTwo); //override value over first one

// new - constructor function creates new instance
// step 1 - empyt obj is created - new instance 
// constructor fun is called  
// injects value 
// u gets value 


console.log(userone.constructor);





