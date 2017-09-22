
var words = ["abc", "efd","hs","nfaofp"]
var maxLength = 4

var shortWordArr = words.filter(function(word){
    return word.length < maxLength;
  })

console.log(shortWordArr)
