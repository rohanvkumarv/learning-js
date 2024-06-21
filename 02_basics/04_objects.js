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

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.firstname);
// console.log(regularUser.fullname?.userFullname.firstname); //if fullname doenst exits 


// objects merge or combine  

const obj1 = {1:"a" ,2:"b" }

const obj2 = {3:"c" ,4:"d" }

const obj4 = {5:"c" ,6:"d" }

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)
// here every object goes to empty object 
// if we dont use that it goes to first obj all other objs  

const obj5 = {...obj1,...obj3}


// console.log(obj5);


const users = [
    {
        id:"1",
        name:"rohan"

    },
    {
        id:"1",
        name:"rohan"

    },
    {
        id:"1",
        name:"rohan"

    },
    {
        id:"1",
        name:"rohan"

    }

]

// users[0].name
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // returns array 
// console.log(Object.values(tinderUser)); // returns array 
// console.log(Object.entries(tinderUser)); // returns array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// 3rd lecture on objects 


// destructuring objects
const course = {
    coursename:"js in hindi",
    price:"999",
    courseinstructor :"hitesh"
}

// course.courseinstructor    
const {courseinstructor : instructor } = course
// console.log(courseinstructor);

console.log(instructor);
// for using multiples place same value 
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh ")

// destructuring array 

// json   -  object with no name..not a obj
// {
//     "name" : "hitesh",
//     "coursename":"js",
//     "price":"free"
// }


// api  send a req to server and get query
// send req get obj then use it / 
// use fetch method to get data drom url and then convert to get data 


// api  in array 
// study json  response and fromat it 

// u can get any type of data as response from Api so u gotta know
// understand anyalise how to get data from ti 