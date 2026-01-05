class ValidationError extends Error { //create custom error class extend with built in error
    constructor(message) {
        super(message);  //call the parent constructor with the message
        this.name = "ValidationError"; //set a custom name with this error type
    }
}

function checkAge(age) {
    if(age < 18) {
        throw new ValidationError("Age must be 18 or above")  // age is less than 18  then throw  error
    }
    return "Access granted";  //age is matched with condition 
}

try{
    console.log(checkAge(25));
}
catch(error) {
    if(error instanceof ValidationError){
        console.log("custom error: ",  error.message);  //check if Catch any error is an instance of cutom vaidtaionError
    }
    else {
        console.log("unknown error: ",  error.message);  //Handled  any other unknown error
    }
}
