var inputString = 'building'

function reverseStr (inputString) {
  var words = inputString.split("")
  var arr = []
  for (var i = words.length-1; i>=0; i--) {
    arr.push(words[i])
  }
  //console.log(arr.join(""))
  return arr.join("")

}

reverseStr(inputString)
