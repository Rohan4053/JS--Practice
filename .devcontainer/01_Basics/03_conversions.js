let score="true" //On printing score it gives 0

console.log(typeof score)    // number
console.log(typeof(score))   // number



let valueInNumber = Number(score)  /// converted to number
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);  // NaN
console.log(score) 
console.log(typeof score) 

//"33"=> 33
// "33abc"=> NaN
// true=> 1; false=> 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //true

//1=> true
// " " => false
// "hitesh" => true

let someNumber=22

let stringNumber = String(someNumber)

console.log(typeof someNumber)