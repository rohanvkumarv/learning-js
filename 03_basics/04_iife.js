// immediately invoked function expressions 
// sometimes we need to immediately execute functions Also  
// we  dont want pollution from global so we also gets a scope from 
// funtion

(function chai (){
    //name iifi
    console.log("DB connected ");
})(); //explicit end here with semilcon
// ()() - defination and execution 

( () => {
    //unnamed iifi
    console.log("DB connected " );
})();

( (name) => {
    console.log(`DB connected ${name}`);
})('hitesh');
// chai()

// write two iifi at one place while using semicolon they willrun 

