const myMap = new Map();   //create a map stores a key value pairs

myMap.set("name", "priyanka");   //key can be any type (string,number,bolean,object)
myMap.set("age", 24);

// console.log(myMap.get("name"));
// console.log(myMap.get("age"));
// console.log(myMap.has("age"));
// console.log(myMap.size)


const mySet = new Set();  //stores a unique  values only no duplicated allowed

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(2);

// console.log(mySet);
// console.log(mySet.has(3));
// console.log(mySet.size);

const weakMap = new WeakMap(); //key must be Object only
let obj  = {id:1};
// console.log(obj.id);
// weakMap.set(obj, "Seceret Data"); 
// console.log(weakMap.get(obj));  

// obj = null //object eligible for garbage collection weakmap entry removd automatically
// console.log(weakMap.get(obj));   


const weakSet = new WeakSet(); //stores only objects (auto-garbage cleaned)
let user = {user: "priyanka"};
weakSet.add(user);
console.log(weakSet.has(user)); 

user = null;  //objects removed
console.log(weakSet.has(user)); 
 