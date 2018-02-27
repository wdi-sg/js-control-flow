/**
Write a program that will take a hardcoded string, and console log the reversed version of it.

Requirements

You must use a for loop. No .reverse()
You may use the string below
*/


var inputString = 'building';

function reversal(inputString){
	//create a new string
	var newStr = "";

	for(var i=inputStr.length-1;i>=0;i--){
		//Starting point of loop corresponds to the last character
		newStr += inputString[i];
	}
	return console.log(newString);
}

reversal('building');
