var string = "";

for(i = 1; i <= 100; i++){
string = "";
if(i % 3 === 0) { string += "fizz";}
if(i % 5 === 0) { string += "buzz";}
if(string !=="" ) {console.log(string);} else {console.log(i);}
}
