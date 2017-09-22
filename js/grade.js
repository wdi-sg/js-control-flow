grading = function(testScore) {
  switch(true) {
    case (testScore >= 85):
      grade = "A";
      break;
    case (testScore >= 75):
      grade = "B";
      break;
    case (testScore >= 65):
      grade = "C";
      break;
    case (testScore >= 50):
      grade = "D";
      break;
    case (testScore < 50):
      grade = "F";
      break;
    default:
      return('Not a number');
  }
  return(grade)
}

console.log(grading(86));
