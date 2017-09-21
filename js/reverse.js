/*
Write a program that will take a hardcoded string,
and console log the reversed version of it.
*/

var inputString = 'building';
var reverseString = '';

for(var i = inputString.length -1; i >= 0; i--) {
  reverseString += inputString[i];
}

console.log(reverseString);
