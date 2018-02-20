function collectIds(array) {
  let filter = getFilteredArray(array, function(elem) {
    return elem.rating > 3;
  });
  
  return getTransformedArray(filter, function(elem) {
    return elem.id;
  });
}

