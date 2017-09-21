/* Write a program that will take an array of words.
Using a variable called maxLength, push words that
are less than the maxLength into a new array, and
console.log the value of maxLength.
*/

var words = ["hello", "bye", "braincell", "die", "sleep", "sing", "doreamon"]
var maxLength = 4
var newWords = [];

for(var i = 0; i < words.length; i++) {
if (words[i].length < maxLength) {
  newWords.push(words[i]);
}
};

console.log(newWords);
console.log('maxLength value is ' + maxLength);
