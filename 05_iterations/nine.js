const myNums= [1,2,3,4,5,6]

// const MyTotal = myNums.reduce((acc,cur_val)=>{
//     console.log(`acc:${acc} and curval :${cur_val}`);
//     return acc  + cur_val
// },3)

const MyTotal  = myNums.reduce( (acc,cur_val) => acc+cur_val , 0)
console.log(MyTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price:2999
    },
    {
        itemName : "python course",
        price:999
    },
    {
        itemName : "android dev course",
        price:5999
    },
    {
        itemName : "data science",
        price:15999
    },

]

const total = shoppingCart.reduce((acc,item) =>acc + item.price,0)
console.log(total);