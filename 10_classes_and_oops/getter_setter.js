class User {
    constructor(email,pass){
        this.email = email;
        this.pass = pass;

    }
    get pass(){
        return this.pass.toUpperCase()
    }

    set pass(value){
        this.pass = value
    }

    // error 
    // race between set and constructor
    // RangeError: Maximum call stack size exceeded
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)
    // at set pass [as pass] (/workspaces/learning-js/10_classes_and_oops/getter_setter.js:12:19)


}

const hitesh = new User("hitesh.ai","112")
console.log(hitesh);