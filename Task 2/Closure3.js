//function factory string utilities
function stringUtils(){
    return {     //return an object containing multiple functions
        toUpper: function(str){
            return str.toUpperCase();    
    
        },
        toLower: function(str){
            return str.toLowerCase();
        },
        getLength:  function(str){
            return str.length;
        }
    };

}

const sUtils = stringUtils();
console.log(sUtils.toUpper("hello"));
console.log(sUtils.toLower("HEY"));
console.log(sUtils.getLength("function factory"));  

