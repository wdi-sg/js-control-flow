//argument: array of words
// var maxLength
// push words.length < maxLength into newarray
//console.log(maxLength)
//
word = ["justify", "geterejifoa","header"]

function Length(wordArr){
  var maxLength = 0
  var lengthArr = []
  for(var i = 0; i < wordArr.length; i++){
    lengthArr.push(wordArr[i].length)
    //console.log(lengthArr)
  }
  maxLength  =  Math.max(...lengthArr)
  console.log(maxLength)
  wordArr.splice(lengthArr.indexOf(maxLength), 1)
  console.log(wordArr)
  return wordArr
}

Length(word)
