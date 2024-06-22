const coding = [ "js","ruby","python"]

// coding.forEach( function (item){

//  })
//  coding.forEach(function (val){
//     console.log(val);
//  });

//  coding.forEach( (value) => {
//  console.log(value);
//  });

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme) //only reference

// coding.forEach((item,index,arr)=>{
//     // console.log(`${item},${index},${arr}`);
//     console.log(item,index,arr);

// })


const myCoding = [
    {
        langName:"javascript",
        langExt: "js"
    },
    {
        langName:"python",
        langExt: "py"
    },
    {
        langName:"ruby",
        langExt: "rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langExt);

})