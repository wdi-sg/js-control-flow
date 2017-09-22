function reverseString(inputString) {
  var newString = " ";
  for (var i = inputString.length-1; i >= 0; i--) {
  newString += inputString[i];
}
console.log(newString)
}

reverseString('building')
