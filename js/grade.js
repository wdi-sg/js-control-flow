function grading(score){
var grade = "";
if(score>80 ? grade = "A" : score > 70 ? grade = "B": score > 60 ? grade = "C" : score > 50 ? grade = "D" : score > 40 ? grade = "E" : grade="F" );
switch(grade){
case "A": console.log("Grade A") ; break;
case "B": console.log("Grade B") ; break;
case "C": console.log("Grade C") ; break;
case "D": console.log("Grade D") ; break; 
case "E": console.log("Grade E") ; break;
case "F": console.log("Grade F") ;
	}
}
grading(50);
