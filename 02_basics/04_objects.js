// const tinderUser = new Object(); singleton 
const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name="samy"
tinderUser.isLoggedIn = false

// new declation way 

// console.log(tinderUser);

const regularUser = {
    email : "sum@gmail.com",
    fullname :{
        userFullname :{
            firstname:"rohan",
            lastname:"kumar",

        } 
    }
}

// nesting allowed of objects too 

console.log(regularUser.fullname);