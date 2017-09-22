// ### filterLongWords.js
// Write a program that will take an array of words. Using a variable called `maxLength`, push words that are less than the `maxLength` into a new array, and `console.log` the value of the new array.

// **Requirements**
// * Your array of words should be stored in a variable, which can be named whatever you like
// * `maxLength` should be a positive number


// dont understand the qns,

var words = ['pachinko', 'coffee', 'ice', 'cigar', 'backpack', 'tattoo']
var maxLength = []
var tooLong = ''

var shortWords = words.filter(function(word){
  return word.length < 5;
});

console.log('shortWords ' + shortWords)
console.log('This is not finished!')
