const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num)=> num+10)
console.log(newNums);

// returns unlike foreach like filter 

// Key Differences:
// Purpose:

// filter is used to select elements that match a certain condition.
// map is used to transform elements of an array based on a function.
// Return Value:

// filter returns a new array with elements that pass the test.
// map returns a new array with the transformed elements.
// Original Array:

// Both methods do not modify the original array; they return new arrays.

// chaining  
const newNumss = myNumbers
   .map((num)=>{ 
    return num*10
    })
   .map((num) =>{ return num+1})
   .filter((num) => {
    return num>=40
   })

console.log(newNumss);