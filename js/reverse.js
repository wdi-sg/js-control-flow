var inputString = "building"
//console.log(inputString.length)
var reverseStr = "";

//reverseStr += inputString
//console.log(reverseStr)

 for (var b = inputString.length; b>=0; b--){
      var a = inputString.charAt(b)
      reverseStr += a
      //  console.log(reverseStr)
  }
      console.log('my reverse string is: ' +reverseStr )
