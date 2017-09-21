// a:90-100
// b:80-90
// c:60-79
// d:40-59
// e:20-39
// f:0-19
//

var score = 50
var letterScore

switch(score)
{
  case  90:
   letterScore = "A"
  break

  case  80:
  letterScore = "B"
  break

  case  70:
  letterScore = "C"
  break

  case  50:
  letterScore = "D"
  break

  case  30:
  letterScore = "F"
  break

  default:
  console.log("Score out of range")
}

console.log(letterScore);
