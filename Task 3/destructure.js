function destructure(obj, keys){   //A function to extract specific properties  from an obj
     const result = {};
      
     //Loop through each key in the keys array
     keys.forEach(key =>{    //If obj exists,get the value of obj[key] and store it in result
        result[key] = obj?.[key];   //If  obj[key] doesn't exist result [key] will be undefined
     });
     return result;        /
}
const user = {
    name: "priyanka",
    age: 24,
    city: "pune"
};
//Destructure the  object using our fun
const{name, age} =  destructure(user,["name", "age"]);  //This will create a new object and then destructures it into variables name and age
console.log(name);   
console.log(age);