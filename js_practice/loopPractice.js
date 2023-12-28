//import chalk from 'chalk';

const chalk  = require('chalk');
//while
let i =0;
while(i<10)
{

    console.log("while",i);
    i++;
}

//do while
do
{
    console.log("inside while"+i);
    i++;
}while(i<15)

// for simple
for(let i= 0;i<10;i++)
{
    console.log(`i: ${i}`)
}

//for in
// for in loop is used for iterating  over object properties
//So if we need key and values both then we can use this
const student  = {
    name:"Arundeep",
    age:25,
    qualification:"Btech C.S.E",
    higherGoals:"Financial Freedom",
    hobbies:"reading writing"
}

const arr = [10,20,30,40,50,60];
for(const keys in student)
{
    console.log(`keys ${keys} values ${student[keys]}`);
}

//for of is used to iterate over the values of iterable objects 
// like arrays,Strings,map,Set
for(const value of arr)
{
    if(value==20){
         //break the loop
      //  break; 
     

      // continue the loop
      
    

      continue;
      

    }
console.log(`values ${value}`);
}
for(const char of "arundeepsingh")
{
    console.log(`char ${char}`)
}
console.log("hello");
console.log(chalk.green("hello chalk is used!!j"));


