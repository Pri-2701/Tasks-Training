
class user {     //Parent class
    #password       //private field  with getter
    #pin  //private   no getter
    constructor(name, email, password,pin) {   //constructor used to intialize object properties
         this.name = name;
         this.email = email;      //public property name
         this.#password = password;  //private property 
         this.#pin = pin;
    }
    showInfo() {    //method show only safe and public info  
        console.log("user name:", this.name);
        console.log("user email:", this.email);
    }
    get password() {
        return this.#password;    //controlled access
    }
    set password(newPassword) {
            this.#password = newPassword      //update password
    }
    showPinInsideClass() {   //method to acces pin only same class
        console.log("user pin:", this.#pin);
    }
    checkPassword(inputPassword) {  //method to safety check password
        return this.#password === inputPassword;    //we don't show or print password directly
    }
}


class admin extends user {    //child class inherits from user
     constructor(name,email,password,pin,role) {    //admin has name,email, and extra own property is role
        super(name, email,password,pin)          //calls constructor of parent class user
        this.role = role;  
     }
     showadminInfo() {
        this.showInfo();
    this.showPinInsideClass();
        console.log("admin role:", this.role);
     }
}

const user1 = new user("priya","priya@2001","p155",123);  //create object for user class
user1.showInfo();   //only show name and email
console.log("access password using getter:",  user1.password);
user1.password = "pc125";
console.log("updated password:", user1.password);
user1.showPinInsideClass(); //only  access inside same class

const admin1 = new admin("mrun","mrun@2000","admin1",1234,"super admin"); //create object for admin class
admin1.showadminInfo();   //ony show name,email and role
console.log(user1.checkPassword("1255")); 

// console.log(user1.#password);//cannot access private fields give error
