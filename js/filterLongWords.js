// ### filterLongWords.js
// Write a program that will take an array of words. Using a variable called `maxLength`, push words that are less than the `maxLength` into a new array, and `console.log` the value of `maxLength`.
//
// **Requirements**
// * Your array of words should be stored in a variable, which can be named whatever you like
// * `maxLength` should be a positive number


var maxLength = 4
var input = ['how', 'was', 'your', 'day']
var short = []

// console.log(input[0].length)
for (i = 0; i < input.length; i++) {
  if (input[i].length < maxLength) {
    short.push(input[i])
  }
}

console.log(short, maxLength)
