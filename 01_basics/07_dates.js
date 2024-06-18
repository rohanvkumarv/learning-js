// date is now pain point temporal will be infuture method like math 
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toISOString()
// let mydate = new Date(2023,0,23)
// let mydate = new Date(2023,0,23 ,5,3)
// let mydate = new Date("2023-01-12")
let mydate = new Date("01-02-2023")
// console.log(mydate.toLocaleString()); 

let mytimestemp = Date.now() 
// console.log(mytimestemp);
// console.log(mydate.getTime());
console.log(Math.floor(Date.now() /1000));


let newdate  = new Date()
// console.log(newdate);
// console.log(newdate.getMonth() +1 );
// console.log(newdate.getDay());

// `${mydate.getFullYear()} time is month is ${newdate.getMonth()}`

newdate.toLocaleString('default ' . {
    weekday: "long",
    timeZone:'en - '
})
