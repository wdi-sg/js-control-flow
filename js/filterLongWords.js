
var sentence = "why always use hello world to print to screen"

function removeLongWord (sentence) {
  var word = sentence.split(" ") // to convert string to array
  var maxLength=0
  for (var i = 0; i <= word.length -1; i++) {
    var length = word[i].length
    if (length > maxLength){
      maxLength = length
      //console.log(maxLength)
    }
  }
  console.log(maxLength)
  var reviseSent = []
  for (var i = 0; i <= word.length -1; i++) {
    if (word[i].length < maxLength){
      reviseSent.push(word[i])
    }
  }
  return reviseSent
//console.log(reviseSent)
}

removeLongWord(sentence)
