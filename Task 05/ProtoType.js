function User(name, email, age) {   //constructor functions are used to create multiple  ojects with similar properties
    this.name = name ;
    this.email = email;
    this.age = age;
}

User.prototype.greet =  function() {   //prototype-based utility function:greet 1st function
    console.log(`hello ${this.name}!`)
}
 
User.prototype.isAdult = function() {   //check if  user is adult 2nd functin prototype
    if(this.age >= 18) {
        console.log(`${this.name} is an adult`);
    }
        else{
        console.log(`${this.name} is not an adult`);
        }
    }

    User.prototype.updateEmail = function(newEmail) {   //3rdfuntion prototype  
        this.email = newEmail;
        console.log(`${this.name} is new mail is ${this.email}`)
    }

    const user1 = new User("priya", "priya@gmail.com", 24) //create user object
    const user2 = new User("neha","neha@gmail.com",15);

    user1.greet();
    user1.isAdult();
    user1.updateEmail("priya01@gmail.com");

    user2.greet();
    user2.isAdult();
    user2.updateEmail("priya01@gmail.com");