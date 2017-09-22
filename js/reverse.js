function reverseString(inputString){
  var newString = ""
  for (var i=inputString.length-1; i >= 0; i--){
    newString += inputString[i]
  }
  return newString
}

reverseString("building");
