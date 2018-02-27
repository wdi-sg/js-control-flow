// Variable Initialization
var words_array = ["haha", "shopping", "happy", "knowledge", "enormous", "fabulous"];
var new_array = [];
var maxLength = words_array.length;

// Search for words with length shorter than length of words_array into new_array
for (var words in words_array){
  if (words_array[words].length < maxLength){
    new_array.push(words_array[words]);
  }
}

// Display length of words_array
maxLength = words_array.length;
console.log(maxLength);
