const marvel_heroes = ["iron man" , "thor" ,"loki"]
const dc_heroes = ["superman", "batman" , "batman"]

// marvel_heroes.push(dc_heroes) //creates sub array 
// takes any type of input 
//aray is single element here
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][0])c;

// const all_heroes = marvel_heroes.concat(dc_heroes)
// // returns a new array 
// // push doesnt returns a new array 
//  console.log(all_heroes);


const all_heroes = [...marvel_heroes,...dc_heroes]
// can concatane multple arrays   which is limiation in concate keyword
console.log(all_heroes);
const another_array = [1,2,3,4,5,[6,7,8] ,9,[3,5,3,[4,6]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// output [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 3, 5, 3,
//     4, 6
//   ]

// console.log(Array.isArray("rohan"));// checks whether is it array or not
// console.log(Array.isArray(all_heroes));// checks whether is it array or not
// console.log(Array.from("rohan"));

// //creates array give it any type
// console.log(Array.from({name:"rohan"})); //interesting

let score1 = 100;
let score2 = 100;
let score3 = 100;


console.log(Array.of(score1,score3,score2));