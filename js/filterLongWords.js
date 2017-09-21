var array = ["hello", "bye","tom","bob"]

var maxLength = 10
var newArray = []

for (i=0; i< array.length; i++)
{
  if(array[i].length < maxLength)
  {
    newArray.push(array[i])
  }
}

console.log("maxLength is "+ maxLength)
