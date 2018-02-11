var a = parseFloat(prompt("Input length of side a:",""));
var b = parseFloat(prompt("Input length of side b:",""));
var c = parseFloat(prompt("Input length of side c:",""));

var p = (a + b + c) / 2;
var result = Math.sqrt(p * (p - a) * (p - b) * (p - c));
var triangle;

 
if (a == b && b == c) {
	triangle = "equilateral triangle";
} 
else if (a == b || a == c || b == c){
	triangle = "isosceles triangle";
} 
else if (a !== b && a !== c && b !== c) {
	triangle = "scalene triangle";
}  
else if ( a * a + b * b == c * c || a * a + c * c == b * b || c * c + b * b == a * a) {
	triangle = "right triangle";
}

if (a <= 0 || b <= 0 || c <= 0 || result <= 0 || isNaN(result)) {
	console.log("Incorrect data");
} 
else {
	console.log("Type of triangle is " + triangle + "and square is " + result.toFixed(2));
}