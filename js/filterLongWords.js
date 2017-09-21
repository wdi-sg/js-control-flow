// ### filterLongWords.js
// Write a program that will take an array of words. Using a variable called `maxLength`,
//  push words that are less than the `maxLength` into a new array,
//  and `console.log` the value of `maxLength`.
//
//  **Requirements**
//  * Your array of words should be stored in a variable, which can be named whatever you like
//  * `maxLength` should be a positive number


var maxLength = 0;
var maxPos = 0;
var cities = ["Toronto", "Seoul", "Oslo", "Sydney"];
var shortWordCities = []
function remover(cities) {
  for (var i = 0; i < cities.length ; i++) {
    if (cities[i].length > maxLength) {
      maxLength = cities[i].length;
      maxPos = i;
    }
  }
  for (var j = 0; j < cities.length; j++) {
    if (cities[j].length < maxLength){
      shortWordCities.push(cities[j]);
    }
  }
}


remover(cities);
// console.log(shortWordCities);
console.log(maxLength);
