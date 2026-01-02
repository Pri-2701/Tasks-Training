//closure-based counter
 //we create a private variable counter
function createCounter(){
    let count = 0;           //private variables

return function (){   //this inner function can access count
    count++;      //increase  by 1
    return count   //return update value 
    //count is remebered even after createcounter  is finished
    //this remebering called closure
    
};
}

const counter = createCounter();  //create a counter
console.log(counter());
console.log(counter());

