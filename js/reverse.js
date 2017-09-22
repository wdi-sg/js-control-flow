var inputString = 'building'
var outputString=""
// inputString.split('')//.reverse().join('')
for (var i = inputString.length-1; i >= 0; i--) {
  outputString += inputString[i]
}
console.log(outputString)
