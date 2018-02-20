function cypherPhrase(array, text) {
  text = str.split("");
  var textRes = getTransformedArray(text, function(elem) {
    for (var key in arr) {
      if (elem === key) {
        return array[key];
      }
    }
    return elem;
  });
  textRes = textRes.join("");
  return textRes;
}