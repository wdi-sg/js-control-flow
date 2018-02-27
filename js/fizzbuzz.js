for (var i = 1; i <= 100; i++) {
    var printString = "";
    
    if (i % 3 === 0) {
        printString += "fizz";
    }
    if (i % 5 === 0) {
        printString += "buzz";
    }

    if (printString === "") {
        printString += String(i);
    }
    console.log(printString)
}