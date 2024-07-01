class User {
    constructor(email,pass){
        this.email = email;
        this.pass = pass;

    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get pass(){
        return this._pass.toUpperCase()
    }

    set pass(value){
        this._pass = value
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

const hitesh = new User("hitesh.ai","abc")
console.log(hitesh.pass);
console.log(hitesh.email);
console.log(hitesh);
// ABC
// HITESH.AI
// User { _email: 'hitesh.ai', _pass: 'abc' }