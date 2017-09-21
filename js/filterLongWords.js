var items = ['Air-conditioner','Fan', 'Computer', 'Chair', 'Bed', 'Wardrobe', 'Shelf']
var maxLength = 7
var output = [];

for(var i= 0; i < items.length; i++){
if(items[i].length < maxLength)
output.push(items[i])
}
console.log('Shorter items =',output)
console.log('max length =', maxLength)
