var maxLength = 6
var words = ['hello','hi','bye','goodbye']
var newArr = []

// var longWords = words.filter(word => word.length > 6)
var longWords = words.filter(function(word){
  return word.length > 6;
});

  newArr.push(longWords)

  console.log(newArr)
