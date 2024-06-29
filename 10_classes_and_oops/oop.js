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

   return this
}

const userone
