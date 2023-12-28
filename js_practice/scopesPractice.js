//there are tow types of scopes in javascript 

// 1. local scope (function , block scope) {let,const}

//2. Golabal scope {var}

// note: if a we cannot declare a variable with access specifier than 
// it is considered as a Global Variable

//this is a global variable
//global variables are re declarable 
let jv=54;
var a =500;
let b =10000;

if(true)
{
    let b=5555;
   var  a=600;
   console.log("before jv",jv);
   
   let jv ="zx";
   jv=44555;
   console.log("after jv",jv);
   
}

console.log(a,b,jv);

