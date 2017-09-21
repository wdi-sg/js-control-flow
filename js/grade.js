/*
Write a program that will print the letter grade,
given a variable with a test score. Display either
"A", "B", "C", "D", or "F", for an score that is an
integer between 0 and 100. - use switch method
*/

var score = Math.floor((Math.random() * 100)+1);
console.log(score);
switch(true) {
  case (score <=50):
    console.log("F");
    break;

  case (score <=60):
    console.log("D");
    break;

  case (score <=70):
    console.log("C");
    break;

  case (score <=90):
    console.log("B");
    break;

  default:
    console.log("A");
    break;
};
