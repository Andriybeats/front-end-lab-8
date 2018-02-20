function predicateFunction(elem) {
  return elem > 3;
}
function getFilteredArray(array, predicateFunction) {
  var arrayRes = [];
  forEach(array, function(array){
    if(predicateFunction(array)){
    arrayRes.push(array);
    }
  });
  return arrayRes;
}
