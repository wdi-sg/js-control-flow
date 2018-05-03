const grade = score => {
  let letterGrade = ""
  switch (true) {
    case score > 80:
      letterGrade = "A"
      break
    case score > 70:
      letterGrade = "B"
      break
    case score > 60:
      letterGrade = "C"
      break
    case score > 50:
      letterGrade = "D"
      break
    case score > 40:
      letterGrade = "E"
      break
    default:
      letterGrade = "F"
  }
  return letterGrade
}

console.log(grade(99))
