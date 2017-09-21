var words = ["hello", "kityyy", "depression", "please", "fantasy", "sad", "hit"]
var maxLength = 4
var newWords = []

for(var i = 0; i < words.length; i++) {
if (words[i].length < maxLength) {
  newWords.push(words[i])
}
}
console.log(newWords)
