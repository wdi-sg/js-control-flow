var str = ['apple','banana','pineapple','lime']
var maxLength = 6
var newArray=[]

for (i = 0; i < str.length; i++){
  if (str[i].length < maxLength) {
    newArray.push(str[i])
  }
}
console.log(newArray)
console.log(maxLength)
