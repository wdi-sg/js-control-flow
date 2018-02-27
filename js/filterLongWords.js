var wordArray = ["hi", "hee", "hooo"];
var maxLength = 4;

var newArray = [];

for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < maxLength) {
        newArray = newArray.concat(wordArray[i]);
    }
}

console.log(newArray);