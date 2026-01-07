function handleError(error) {  //create custom error handle  using function
    if(error === "Network Error") {
        console.log("Network issue,please check internet");
    }
    else if(error === "404") {
        console.log("Data Not Found");
    }
    else {
        console.log("something went wrong");
    }
}
 
try {   //using error try catch 
   let errorType = " Error"      //define the type of error to throw  
   throw errorType;
} catch(error) {
    handleError(error);    //catch the throw error and pass it to custom error handler 
}