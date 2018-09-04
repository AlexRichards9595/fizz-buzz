var fizzBuzz = function(number) {
  
  var isMultipleOfFive = checkIfMultipleOfFive(number);
  var isMultipleOfThree = checkIfMultipleOfThree(number);

  if (isMultipleOfFive && isMultipleOfThree ){
    return "fizzbuzz"
  }
  if (isMultipleOfThree) {
    return "fizz"
  }
  if (isMultipleOfFive) {
    return "buzz"
  }
  return number;
}
var checkIfMultipleOfThree = function(number) {
  return number % 3 == 0;
}
var checkIfMultipleOfFive = function(number) {
  return number % 5 == 0;
}
