// Variable Initialization
var inputString = 'building';
var reversedString = "";

// Logic to reverse the word building
for (var i = inputString.length-1; i >= 0; i--) {
    reversedString = reversedString.concat(inputString.charAt(i));
}

// Display the reversed string
console.log("Reversed String = " + reversedString);
