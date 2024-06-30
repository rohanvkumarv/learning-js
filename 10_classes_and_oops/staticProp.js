class User {
    constructor(username){
     this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);

    }

    static CreateId(){
        return `123`
    }
}

const hitesh= new User ("hitesh")

// console.log(hitesh.CreateId())


class teacher extends User {
    constructor(username,email){
        super(username)
        this.email =email
    }
}

const Iphone  = new teacher("iphone","i@phone.com")
Iphone.logMe();
console.log(Iphone.CreateId());