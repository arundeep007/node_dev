//1. They have a shorter and more concise syntax, which is especially useful for small functions.
// without paranthesis and return statement it works
const a = prms => prms+"prefix"
console.log(a("prms"));
//console.log("outer this",this);

//They have a lexical this, meaning they inherit the this value from their containing scope. This can be advantageous
// in some situations, but it can also lead to unexpected behavior if not used correctly.
/*
 const ct = function() {
    console.log("this", this); // Refers to the global object
    this.count = 0;

    setInterval(function() {
        this.count++; // Now, this refers to the object created by setInterval
        console.log(this.count);
    }.bind(this), 5000);
};
ct();
*/





//3. They cannot be used as constructors 
//to create objects with the new keyword.

//4. They are not suitable for methods
// within objects because they do not have
 //their own this. In such cases, traditional
 // function expressions are preferred.

 const show = function()
 {
   console.log("function this ",this);
 }

 show();

 const show1 = ()=>{
   console.log("arrow function this",this);
 }
 show1();

 this.name="global data";
 
 const student ={

   name:"Arun",
   id:2020,
   location:"india",
   getProperty:function(){
      console.log("student property using normal function:",this)
   },
   getPropertyArrow:()=>{
    console.log("student property using arrow function:",this)

   }
 };
 this.student1=student;

 student.getProperty();
 student.getPropertyArrow();

 //In the global context, the value of this will typically refer to the global object 
// (e.g., window in a browser environment, or global in a Node.js environment).