

reverse = function(input) {
  var reverseResult = []
  var reverseString = ""
  for (var i = 0; i < input.length; i++) {
    reverseResult.unshift(input[i])
  }
  for(var j = 0 ; j < reverseResult.length ; j++) {
    reverseString += reverseResult[j]
  }
  return reverseString
}

inputString = 'building'
console.log(reverse(inputString));
