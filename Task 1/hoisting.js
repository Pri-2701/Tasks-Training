//Task: write 10 examples demonstrating hoisting diff

//#eg1
console.log(a);
var a = 10;   //var is hoisted but intalized with undefined value

// //#eg2
console.log(b);  // let cannot access b value before intalization
let b =20;  //temporal Dead Zone

// //#eg3
console.log(c); //const  cannot access c value before intaliztion
const c=30;  ////temporal Dead Zone

// //#eg4
hello();   //functions declartions can be called before they are defined due to hoisting
function hello(){
    console.log("hello");  //hello
}

// //#eg5
sayHi();    //sayHi runs is undefined but you cannot call undefined  as a function so its throws error
var sayHi = function (){  
    console.log("hi");  
   };

//eg6:
sayHey();   //function expression assigned to let  so cannot access before defined so its show error
let sayHey = function (){
    console.log("hey");  ////temporal Dead Zone
}

//#eg7:
sayHy();   //function expression assigned to const so cannot access before defined so its show error
const sayHy = function (){
    console.log("hy");
}

//#eg8
arrow();   //arrow function  assigned with var are hoisted as undefined 
var arrow = () =>{
    console.log("Arrow func");// so calling them before assign they throw type error
}//var is hoised but not a function

//eg9
const obj = new Person(); //the code  throw error beacuse javascript classes are not hoisted
class Person{   //so person cannot be used before declaration
    constructor(){
        console.log("person created")
    }
}

//#eg10
var x = 5;  // x are hoisted at the top of the function and shadows global x,  so its  when code is run output come
function test(){
    console.log(x);
};
test();  


