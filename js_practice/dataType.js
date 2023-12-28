// primitive 

//number ,String,boolean ,null,undefined,symbol,bigInt

// non primitve
// Objects  arrays

//Symbols are used to generate Unique Primitive data types 
const k1 = Symbol('123');
const k2 = Symbol('123');

console.log(k1 == k2)
const obj = {}
obj.l = 5;
obj.i = 8;
obj.k1 = 45;

for (data in obj) {
    console.log("data is ", obj[data])
}
console.log(obj)

//undefined
// A variable that has been declared but has not been
// assigned a value automatically has the value undefined.
let keys1 ;
console.log("value",keys1);
let keys ="";

if(keys)
{
    console.log(keys);

}

//null
//It is explicitly assigned by a programmer to signify the intentional absence of any object value.
//It can be used to reset or clear the value of a variable.
//It is often used when an object is expected but not yet provided.
let person1;
let person = null;
person = {
    name:'arun',
    age:30

};
console.log(person);



//Symbol

//Unique Object Keys:
//Symbols can be used as keys in objects, ensuring that the property names are guaranteed to be unique.
//This is particularly useful in scenarios where multiple parts of a program 
//may be adding properties to an object, and naming conflicts need to be avoided.
const identiefier = "idf14587775156";
const symbol1 =Symbol(identiefier);
const symbol2=Symbol(identiefier);
const k11 = Symbol();
const k22 = Symbol();
const myObj = {};
myObj[k11]="Arun"
myObj[k22]="Deep"
console.log('hello',myObj[k11]);
console.log(k11);

//Big integer 


//In JavaScript, the BigInt is a relatively new data type that
// was introduced to represent integers of arbitrary precision.
// Regular JavaScript numbers are 64-bit floating-point numbers, which means
// they have a maximum safe integer value of 2^53 - 1. Beyond this limit, integers may lose precision.

const bigIntLiteral = 50n;
const bigIntConstructor = BigInt(10);
const number = 10;

console.log("big integer",bigIntLiteral);
console.log("big integer constructor",bigIntConstructor);

console.log("addition of integer and bigint",bigIntLiteral+BigInt(number));
console.log(typeof bigIntLiteral);