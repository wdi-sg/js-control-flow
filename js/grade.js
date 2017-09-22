var score = 85

switch(true) {
    case (score > 89 && score <= 100): console.log("A")
        break;
    case (score > 79 && score < 90): console.log("B")
        break;
    case (score > 69 && score < 80): console.log("C")
        break;
    case (score > 59 && score < 70): console.log("D")
        break;
    case (score > 49 && score < 60): console.log("E")
        break;
    case (score < 50): console.log("F")
        break;
    }
