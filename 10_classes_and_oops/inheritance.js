class user {
    constructor(username){
        this.username = username
    }
    logMe(){
      console.log(`username is  ${this.username}`);  
    }
}

class teacher extends user{
    constructor(username ,email,password){
        super(username) //do all work of call
        this.email = email
        this.password= password
    }
    addCourses(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai  = new teacher("chai","chaai@teacher.com","123")
chai.addCourses()

const masalaChai = new user("masalaChai")
masalaChai.logMe()
console.log(chai === teacher);
console.log(chai instanceof teacher);
console.log(chai instanceof user);