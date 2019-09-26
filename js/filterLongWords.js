var myArray = ["good","bad", "hello","new", "underdog"];
var maxLength = 7;
var newArray = [];
for(i = 0; i<myArray.length-1; i++)
{
if(myArray[i].length < maxLength){
	newArray.push(myArray[i]);
	console.log(newArray[i] + " is less than max length of " + maxLength ) ;
	}
}
