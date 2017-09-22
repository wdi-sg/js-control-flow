function inputScore(score) {
switch(true) {
  case score >= 85:
  console.log('A');
  break;
  case score > 75 && score < 85:
  console.log('B');
  break;
  case score > 65 && score < 75:
  console.log('C');
  break;
  case score > 55 && score < 65:
  console.log('D');
  case score < 55:
  console.log('F');
  break;
  default:
  console.log('Invalid Number. Please try again')
  break;
}
}
inputScore(5);

// define a function that requires a score
// write grades against score
// if grades are below score
// display result
//
// ### grade.js
// Write a program that will print the letter grade, given a
// variable with a test score. Display either "A", "B", "C",
//  "D", or "F", for an score that is an integer
//  between 0 and 100.
//
// **Requirements**
// * Your program should have a variable to store the letter grade
// // (an integer between 0 and 100)
// * For the letter grades, you may use whatever grading scale you like
// * You must use a switch statement (hint, you may need to review and think
//   about how the `switch` statement works)
