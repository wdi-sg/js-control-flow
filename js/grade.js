/**
Write a program that will print the letter grade, given a variable with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100.

Requirements

Your program should have a variable to store the letter grade (an integer between 0 and 100)
For the letter grades, you may use whatever grading scale you like
You must use a switch statement (hint, you may need to review and think about how the switch statement works)
*/

function grading(testScore){
	
	switch(true){
		case (testScore<50):
			console.log("F");
			break;
		case (testScore>50 && testScore<=55):
			console.log("D");
			break;
		case (testScore>55 && testScore<=60):
			console.log("C");
			break;
		case (testScore>60 && testScore<=70):
			console.log("B");
			break;
		case (testScore>70 && testScore<=100):
			console.log("A");	
			break;	
	}
}
