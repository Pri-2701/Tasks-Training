//deep cloning without using JSON parse
function deepClone(obj){
  //Step1:If value is not  object or is null,return it
  if(obj === null ||typeof obj !==  "object"){
    return obj;
  }
  //create Array or object
  const copy = Array.isArray(obj)  ? [] : {};

  //loop through properties 
  for(let key in obj){
    copy[key] = deepClone(obj[key]);
  }
  return copy; //returned cloned value
}

const person = {
  name: "priya",
  address: {
    city: "pune",
    pin:411033
  }
};
const clonePerson =  deepClone(person);

clonePerson.address.city = "mumbai";

console.log(person.address.city)
console.log(clonePerson.address.city);

