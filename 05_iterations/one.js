// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
}
// ctrl + d 
// shit +alt+down

for (let i = 1; i < 10; i++) {
    // console.log(`outer loop ${i}`);
   for (let j = 1; j < 10; j++) {
    // console.log(`inner  loop ${j}  and i is ${i}`)
    // console.log(i + '*' + j + '=' + i*j);
    
   }
}
let myarray = [  "flash" , 'batman', 'superman']
// myarray.length 
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}
// gives undefined if we move out of index  

//break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i ==5){
//         console.log("5 detected");
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i ==5){
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${i}`);
    
}

