var words = ['parrot', 'favorable', 'engine', 'container', 'truth', 'ballerina']
var maxLength = 7
var shortArray = []

words.forEach(function(word){
  if (word.length<maxLength) {
    shortArray.push(word)
  }
})
console.log(shortArray);
console.log(maxLength);
//a.forEach(function(element) {
//    console.log(element);
//});
