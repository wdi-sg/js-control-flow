//Write a program that will take a hardcoded string, and console log the reversed version of it.
var inputString = 'building';
var string = "";
//change string to an array
for(var i = inputString.length-1; i >=0; i-- ){
  string += inputString[i];
}
console.log(string);

//if you want to use a .reverse() is an array function

//inputString.split("").reverse().join();
