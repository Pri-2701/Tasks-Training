//memory visualiztion 
//primitive data created in stack area

let person1 = {    //objects created in heap area
    name: "priyanka",
    age: 24
};

let person2 = person1;   //person2 now points to the same object as person 1
 person2.age=25;

 console.log(person1);//25  printing person2 age beacuse object is shared
 console.log(person2);//25

console.log(person1===person2);  //(===) check strict equality reference type
//this task shows that changes made through one vaiable are reflected to another they have same reference