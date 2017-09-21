let wordArr = ["welcome", "to", "funky", "town"]
let maxLength = 5

const filterLongWords = (arr, maxLength) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < maxLength) {
      // console.log(arr[i])
      newArr.push(arr[i])
    }
  }
  console.log(maxLength)
  return newArr
}

console.log(filterLongWords(wordArr, maxLength))
