// ### reverse.js
// Write a program that will take a hardcoded string, and console log the reversed version of it.
//
// **Requirements**
// * You must use a `for` loop. No `.reverse()`
// * You may use the string below
//
// ```js
// var inputString = 'building';
// ```
//
// ---

var inputString = 'building'
var reverseString = []

var inputArray = inputString.split("")

console.log(inputArray)

for (i = 0; i < inputArray.length; i++) {
  reverseString.push(inputArray[inputArray.length-1-i])
}

console.log(reverseString.join(""))
// console.log(inputString.split("").reverse().join(''))
