const fizzbuzz = n => {
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        console.log("fizzbuzz")
        break
      case i % 5 === 0:
        console.log("buzz")
        break
      case i % 3 === 0:
        console.log("fizz")
        break
      default:
        console.log(i)
    }
  }
}

fizzbuzz(15)
