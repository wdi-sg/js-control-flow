// function FizzBuzz (val) {
//   for (var val = 0; i < 100; i += 1)  {
//     if (val % 3 = 0)
//
//   }
// }

function FizzBuzz (counter) {

for (counter = 0; counter < 100; counter++) {
    if(counter%15===0){
        console.log("fizzbuzz")
        counter=counter-1
    } else {
        if(counter%3===0){
            console.log("fizz")
            counter=counter-1
        } else {
            if(counter%5===0) {
                console.log("buzz")
                counter=counter-1
            } else {
                console.log("number " +counter)
                counter=counter-1
            }
        }
    }
}
}

FizzBuzz (10)
