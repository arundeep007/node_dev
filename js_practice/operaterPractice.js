//Arithmatic operaters

// + - * ** / % (++ inrement)(-- decrement)
/*
const a = 5+4;
const b = 5/4;

console.log(2**4);
console.log(1544.55%7);*/


//console.log(b);

// Arithmatic operater 

// += -= /= %= *= **=


// Comparision Operaters

// == , != ,=== ,!==, > ,< ,>= ,<= , ? 
/*
const first = 0;
const second = false;*/
// (loose equality oper.)== operater is used to check both the values are equal or not equal

//The == operator performs type coercion, which means it attempts to convert the operands to a common type before making the comparison.
//  If the operands are of different types, JavaScript will try to convert them to a common type and then compare.

//console.log("first == second",first==second)
//(strict equality oper.) === operater is also equal to ==  
//The === operator, also known as "strict equality," 
//does not perform type coercion. It checks if both the value and the type of the operands are the same.

/*console.log("first === second",first===second)
const j = 4;
const k = '4';
console.log("j != k",j!==k)

*/


//Logical Operaters

// && || !


console.log("comparision operaters");

//loosly equality operater
const result1 = 5 == '5'; //perform type coercion

//strict equality operater
const result2 = 5 === '5'
console.log(result1, result2); //don't perform type coercion

//loosly Inequality Operater

const result3 = 5 != '6';  //perform type coercion
const result4 = 5 !== '9';

console.log(result3, result4);

//  > ,< ,>= ,<= , ? 

//ternary operater 
const isRaining = true;

const result = isRaining ? "It is raining Bring an umbrella" : "Not Rain Today enjoy the Sunshine";
console.log(result);


//Logical Operaters
//and or not
//&&	logical and
//||	logical or
//!	logical not

//Bitwise Operators
//Bitwise operators in JavaScript operate on the individual bits of binary representations of integers. 

//Bitwise AND (&):
/*
Bitwise OR (|):
Bitwise XOR (^):
Bitwise NOT (~):
Left Shift (<<):
Right Shift (>>):
Zero-fill Right Shift (>>>):*/

//Special Operaters

//type of 
console.log(typeof 44.4);

//instance of 

let arr = [4, 5, 40];

class Student {
    constructor(name) {
        this.name = name;
    }
}

let student1 = new Student("Arun");

console.log(arr instanceof Array);

console.log(student1 instanceof Student);
/*
let regex = /pattern/;
console.log(regex instanceof RegExp)*/






