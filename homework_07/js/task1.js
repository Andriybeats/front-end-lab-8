var floors = Number(prompt("Enter number from 1 to 20",""));

var width = floors * 2 - 1;
var left = floors;
var right = floors;
var pyramid = "";

if (isNaN(floors) || floors <= 0 || floors > 20 || floors % 1 != 0) {
  console.log("Incorrect!");
} else {
  for (var i = 0; i < floors; i++) {
    for (var j = 0; j <= width; j++) {
      if (left > j || j > right) {
        pyramid += "   ";
      } else {
        pyramid += "[~]";
      }
    }
   pyramid += "\n";
    left--;
    right++;
  }
      console.log(pyramid);
}
