function grader(score) {
    switch(true) {
        case (score > 80):
            console.log("A");
            break;
        case (score > 70):
            console.log("B");
            break;
        case (score > 60):
            console.log("C");
            break;
        case (score > 50):
            console.log("D");
            break;
        default:
            console.log("E");
    }
}

console.log(grader(90));