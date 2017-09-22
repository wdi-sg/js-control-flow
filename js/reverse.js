//Method 1:
function reverseString(string) {
  var reverseStr = ''
  for(var i = string.length - 1 ; i >= 0 ; i--) {
    reverseStr += string[i]
  }
  console.log(reverseStr)
}
reverseString('building')

//Method 2
function reverseString(string) {
  var toArray = string.split('')
  var newArray = [];
  for (var i = string.length - 1 ; i >= 0 ; i--) {
    newArray.push(string[i].split('').reverse().join(''))
  }
console.log(newArray.join(''))
}
reverseString('building');


// declare a function that reverse string
// convert string into array using Split
// use .reverse .join to join them back.
