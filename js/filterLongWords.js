//Write a program that will take an array of words. Using a variable called maxLength, push words that are less than the maxLength into a new array, and console.log the value of maxLength.


//Your array of words should be stored in a variable, which can be named whatever you like
//maxLength should be a positive number

var maxLength = 4;
var arr = ["i","am","a","programmer"];
var newArr =[];

//loop every single word inside arrWords
for(var i =0; i < arr.length;i++){
  if(arr[i].length < maxLength){
    newArr.push(arr[i]);
  }
}
console.log(newArr);
//find the length of each word
//push all words that is less than maxlength into newArray
