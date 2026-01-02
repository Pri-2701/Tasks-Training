//Custom reduce  for flat array
function customReduce(array, callback, acc) {
   //Loop for each element of array
  for (let i = 0; i < array.length; i++) {    
    acc = callback(acc, array[i]);   //acc=previous accumulated value  array[i]=currnt element
  }
  return acc;   //return final value
}

//custom   reduce also supports nested array
function nestedReduce(arr, callback, acc) {
  for (let item of arr) {
    if (Array.isArray(item)) {   //check if current item is an array
      acc = nestedReduce(item, callback, acc); //recursively call nestedReduce for nested array and acc  is passed to acc continues
    } else {
      acc = callback(acc, item);   //if value is normal value,apply callback
    }
  }
  return acc; 
}


const num = [1, 2, 3, 4];  //simple array
const sum = customReduce(num, (acc, val) => acc - val, 0);//using cutomReduce and itial accumultaor is 0 

const num2 = [1, [2, 3], [4, [5]]];  //nested array  
const sum2 = nestedReduce(num2, (acc, value)=> acc + value, 0);


console.log(sum);
console.log(sum2);