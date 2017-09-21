var maxLength = 0;
var arr = ["lorem", "ipsum", "dolor", "sit", "ametconsectetur", "adipiscing", "elitmorbi", "ultricies", "mi", "sit", "amet", "finibus", "luctussed", "auctor", "lectus", "in", "urna", "volutpat", "tristiquenulla", "in", "consectetur", "lacusduis", "vel", "commodo", "risuscras", "sed", "ligula", "tellussed", "nec", "metus", "pretiumsuscipit", "quam", "etelementum", "odionam", "mauris", "odiomalesuada", "nec", "dolor", "atlaoreet", "dignissim", "lacussed", "bibendum", "tempor"];
var newArr = [];
for(var i = 0 ; i < arr.length ; i++) {
  if(arr[i].length > maxLength) {
    maxLength = arr[i].length;
  }
}
for(var j = 0 ; j < arr.length ; j++) {
  if(arr[j].length < maxLength) {
    newArr.push(arr[j]);
  }
}

console.log("maxLength is ", maxLength);
console.log("newArr is ", newArr);
console.log("arr is ", arr);
