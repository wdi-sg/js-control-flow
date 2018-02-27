var buzz_num = 0;
var fizz_num = 0;
var fizzbuzz_num = 0;
var num = 0

for (i=1; i<=100; i++){
  if (i%3 === 0 && i&5 === 0){
    console.log("fizzbuzz")
    fizzbuzz_num += 1;
  }
  else if(i%3 === 0){
    console.log("fizz")
    fizz_num += 1;
  }
  else if (i%5 === 0){
    console.log("buzz")
    buzz_num += 1;
  }
  else{
    console.log(i)
    num += 1;
  }
}

// Display how many numbers are there for each condition
console.log("Number of fizzbuzz: " + fizzbuzz_num)
console.log("Number of buzz: " + buzz_num)
console.log("Number of fizz: " + fizz_num)
console.log("Number of num without fizz or buzz: " + num)
