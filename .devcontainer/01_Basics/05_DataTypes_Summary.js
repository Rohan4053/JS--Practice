// Data is categorised based on how data is stored and accessed in memory
// Primitive Data Type (7 types)
/*
String,NUmber,Boolean,null,undefined(only variable and memory space declare), Symbol,BigInt
*/

//Javascript is static or dynamic?
// const email=false; //(Value is undefined)

// console.log(email)

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id==anotherId);


const num=4548158941651894561651n 
console.log(typeof num) //bigint
// Reference data type(non-primitive)
/*
Array,Objects,Functions
*/

const heros=["rkm","gopg","poil"]
let myobj= {
    name:"jsdb",
    age:78,  
}

const myFunction=function(){
    console.log("Hello World")
}
console.log(myFunction)

let bio=null
console.log(typeof heros);  //object
console.log(typeof myFunction);  //function

// 262.ecma-international.org/5.1/#sec-11.4.3
