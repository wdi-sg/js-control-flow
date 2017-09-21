// ### reverse.js
// Write a program that will take a hardcoded string, and console log the reversed version of it.
//
// **Requirements**
// * You must use a `for` loop. No `.reverse()`
// * You may use the string below

var normal = 'building';
function reverseString(normal) {
var reversed = "";
    for (var i = normal.length - 1; i >= 0; i--) {
        reversed += normal[i];
    }
    console.log(reversed);
}
reverseString(normal);
