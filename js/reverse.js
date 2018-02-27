let inputString = 'building';
let inputString2 = "GAssembly";

const reverseString = (str) => {
    let strArr = str.split("");
    let reversedArr = [];
    for(let i = 0; i<strArr.length; i++){
        let temp = strArr[i];
        reversedArr.unshift(temp);
    }
    let reversedStr = reversedArr.join("");
    console.log(reversedStr);
}

reverseString(inputString);
reverseString(inputString2);