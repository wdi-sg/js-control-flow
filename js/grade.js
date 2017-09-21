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
}
