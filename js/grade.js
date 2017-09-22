// ### grade.js
// Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.
//
// **Requirements**
// * Your program should have a variable to store the letter grade (an integer between 0 and 100)
// * For the letter grades, you may use whatever grading scale you like
// * You must use a switch statement (hint, you may need to review and think about how the `switch` statement works)

var score = 69
var gradescale

switch (true) {
  case (score <= 50):
    console.log("F");
    break;
  case (score <= 60):
    console.log("D");
    break;
  case (score <= 70):
    console.log("C");
    break;
  case (score <= 80):
    console.log("B");
    break;
  case (score <= 100):
    console.log("A");
    break;

  }
