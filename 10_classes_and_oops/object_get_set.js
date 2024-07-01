const User  = {
    _email:"rohan",
    _pass:"abc",
    //  _ makes it private 
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}


const chai = Object.create(User)
console.log(chai.email);
console.log(chai.pass);