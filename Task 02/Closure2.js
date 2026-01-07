//Create a function factory

//counter system with incerement,decrement & reset
function counter1(){     ///this function create counter
    let count = 15;  //private variable

    return {    //returning object 3 methods
    increment: function(){      //method1:increase  counter by 1
        count++;         //add 1 
        return count;    //updted value
    },
    decrement: function() {
        count--;   //substract by 1
        return count;   //updated value
    },
    reset: function(){  //reset counter by 0
        count = 15;
        return count;
         
    }
    };
}

const counter = counter1(); // create object  for counter1
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());