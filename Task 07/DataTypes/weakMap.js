const cache = new WeakMap();  //create a cache    //weakmap keys must be objects and are auto-removed when object is grabage collection

function getSquare(obj){
    if(cache.has(obj)) { //check if object exists in cache
        console.log("return cache");
        return cache.get(obj);  //return stored instead of recalculating
    }
   const result = obj.num * obj.num;  ////if not in cache,calculate
    
    console.log("calculated now");
    cache.set(obj, result); 
    return result;
}

let n = {num: 4};
console.log(getSquare(n));

console.log(getSquare(n));

n = null

