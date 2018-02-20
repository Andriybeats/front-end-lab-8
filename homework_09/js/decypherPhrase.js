function decypherPhrase(array, text) { 
var newArr = Object.keys(array).reduce(function(obj, key) {
    obj[array[key]] = key;
    return obj;
  }, {});  
  return cypherPhrase(arrayRes, text);
}