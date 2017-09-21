var score = Math.floor((Math.random() * 100) + 1);
console.log("Score is " + score);

switch(true) {
  case (score <= 50):
    console.log("Grade is F");
    break;
  case (score <= 60):
    console.log("Grade is D");
    break;
  case (score <= 70):
    console.log("Grade is C");
    break;
  case (score <= 80):
    console.log("Grade is B");
    break;
  default:
    console.log("Grade is A");
    break;
}
