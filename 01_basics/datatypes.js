//Primitive

//types=String,Number,Boolean,null,undefined,symbol,BigINT
const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id===anotherID);

//non premitive

//Array,Objects,Functions
const names=["Ravi","Aman"];
let myObj={name: "Ravi",age: "22"};

const myFunction=Function()
{
    console.log("Hello World");
}
console.log(typeof myFunction);