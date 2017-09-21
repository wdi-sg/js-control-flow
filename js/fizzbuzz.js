/*
Implement Fizz Buzz. Loop from 1 to 100.
If the number is divible by both 3 and 5,
print "fizzbuzz". Otherwise, if the number
if divisible by 3, print "fizz", or, if the number
is divisible by 5, print "buzz". If none of the
above are true, print the number.
*/

var x = Math.floor((Math.random() * 100)+1);

 if (x % 3 === 0 && x % 5 === 0) {
   result = "fizzbuzz";
 } else if (x % 3 === 0) {
   result = "fizz";
 } else if (x % 5 === 0) {
   result = "buzz";
 } else {
   result = x;
 };

 console.log(result);
