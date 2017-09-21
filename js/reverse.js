var inputString = 'building';

function reverseString(str) {
    var outputString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        outputString += str[i];
    }
    return outputString;
}
console.log(reverseString(inputString));
