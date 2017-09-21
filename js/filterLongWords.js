var words = ["hello", "world", "bye"]

var maxlength = 5

var arrLength = []
for (i = 0; i < words.length; i++) {
  var lengthOfWords = words[i].length
  arrLength.push(lengthOfWords)

  console.log (arrLength)
}

var tooLong = []
var justNice = []
for (j = 0; j < arrLength.length; i++) {
  console.log(arrLength[i] < maxLength ? (tooLong.push(arrLength[i])) : (justNice.push(arrLength[i])));

}
