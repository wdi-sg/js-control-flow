/**
Write a program that will take an array of words. Using a variable called maxLength, push words that are less than the maxLength into a new array, and console.log the value of maxLength.

Requirements

Your array of words should be stored in a variable, which can be named whatever you like
maxLength should be a positive number
*/


function filterLongWords(wordsArray,maxLength){
	var newArray = [];
	var i = 0;
	for(var i=0;i<wordsArray.length;i++){
		if(wordsArray[i].length<maxLength){
			if(!newArray.includes(wordsArray[i])){
			newArray.push(wordsArray[i]);
			}
		}
	}
	return newArray;
}

filterLongWords(["donkey","horse","zebra","dinosaur"],6)
