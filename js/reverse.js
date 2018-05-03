var inputString = "building"

// const reverseWord = string =>
//   string
//     .split("")
//     .reverse()
//     .join("")

const reverseWord = string => {
  let revWord = ""
  for (let i = 0; i < string.length; i++) {
    revWord += string[string.length - i - 1]
  }
  return revWord
}

console.log(reverseWord(inputString))
