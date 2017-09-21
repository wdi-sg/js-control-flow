// ### grade.js
// Write a program that will print the letter grade,
// given a variable with a test score. Display either "A", "B", "C", "D", or "F",
// for an score that is an integer between 0 and 100.
//
// **Requirements**
// * Your program should have a variable to store the letter grade (an integer between 0 and 100)
// * For the letter grades, you may use whatever grading scale you like
// * You must use a switch statement (hint, you may need to review and think about how the `switch` statement works)

// function yourGrade(score) {
//
//   switch(true) {
//     case (score <= 100 && score >= 90):
//        console.log('A');
//         break;
//     case (score <= 89 && score >= 80):
//         console.log('B');
//          break;
//     case (score <= 79 && score >= 70):
//         console.log('C');
//          break;
//     case (score <= 69 && score >= 60):
//         console.log('D');
//          break;
//     case (score <= 59 && score >= 0):
//       console.log('F');
//   }
// }
//
//
// yourGrade(32);

function yourGrade(score) {

  switch(true) {
    case (score <= 50):
       console.log('F');
        break;
    case (score <= 60):
        console.log('D');
         break;
    case (score <= 70):
        console.log('C');
         break;
    case (score <= 80):
        console.log('B');
         break;
    default:
      console.log('A');
      break;
  }
}


yourGrade(91);
