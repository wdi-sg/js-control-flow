var array = ['matt','mosesong','markong']

function filteredList(array) {
var maxLength = 2
var shortArray = []
for (var i = array.length - 1 ; i>=0 ; i--) {
  if(maxLength > array[i].length ) {
    shortArray.push(array[i])
    array.splice(i,1)
    }
  }
// console.log(maxLength);
  return maxLength
  console.log('hey')
  // console.log(shortArray)
}
console.log(filteredList(array));
// each Array has 3 elements;
// each element we can find their length
// compare length with max length
// if less than than push to new list.
//
// console.log(maxLength)
