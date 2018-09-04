describe("The One and Only FizzBuzz", function() {
 it ("should return one when given one", function() {
   var actual = fizzBuzz(1);
   expect(actual).toBe(1);
 });
 it ("should return two when given two", function() {
   var actual = fizzBuzz(2);
   expect(actual).toBe(2);
 });
 it ("should return fizz when given three", function() {
   var actual = fizzBuzz(3);
   expect(actual).toBe("fizz");
 });
 it ("should return buzz when given five", function() {
   var actual = fizzBuzz(5);
   expect(actual).toBe("buzz");
 });
 it ("should return fizz for any multiple of three", function(){
   var actual = fizzBuzz(6);
   expect(actual).toBe("fizz");
 });
 it ("should return buzz for any multiple of five", function() {
   var actual = fizzBuzz(10);
   expect(actual).toBe("buzz");
 });
 it ("should return fizzbuzz for any multiple of three and five", function () {
   var actual = fizzBuzz(15);
   expect(actual).toBe("fizzbuzz");
 });
});
