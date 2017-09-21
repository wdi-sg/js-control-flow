function gradingSys (score) {
  switch (true) {
    case score > 100:
    console.log("You enter a score more than 100")
    break;
    case score >= 80:
    return "A"
    break;
    case score >= 60:
    return "B"
    break;
    case score >= 40:
    return "C"
    break;
    case score >= 20:
    return "D"
    break;
    case score >= 0:
    return"F"
    break;
    default:
    console.log("Please enter a positive number")
  }
}
gradingSys (80)
