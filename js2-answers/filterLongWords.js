var words = ["hello", "world", "bye"]

var maxLength = 5

var newWords = ""
for (i = 0; i <= words.length; i++) {
  var lengthOfWords = words[i].length
  if (lengthOfWords < maxLength) {
    newWords.push(words[i])
  }
}

// //tried to divide the two zzz
// var tooLong = []
// var justNice = []
// for (j = 0; j <= arrLength.length; i++) {
//   console.log(arrLength[i] < maxLength ? (tooLong.push(arrLength[i])) : (justNice.push(arrLength[i])));
//
// }
