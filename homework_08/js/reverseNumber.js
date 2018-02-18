function reverseNumber(numbers){
    var result =  parseInt(numbers.toString().split('').reverse().join('')) * Math.sign(numbers);
    return result;        
}