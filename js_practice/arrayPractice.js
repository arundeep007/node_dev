//in javascript array is a build in global object that is 
// used to store multiple elements at once
  
let array = [5,8,9,"hello",1,5,undefined];


//array functions

//1. array.length is used to get and set the length of elements
// inside array 

console.log(array.length);
//array is expanded to length 10
//so we can add more items to that
//array.length=10;

addToarray(array,20);

for(const data of array)
{
    console.log("data : "+data);
}
console.log(array)
addToarray(array,"new value");
addToarray(array,"more new value");
for(const data of array)
{
    console.log(data);
}
function addToarray(array,item)
{
    array.length++;
    array[array.length-1]=item;
    return array;   
}


//2. array.push() is used to add elemnt to an array

const array1 = [{name:"anu",age:25},1,5,8,null,undefined];

for(const data of array1)
{
    const type = typeof(data);
    if(type===Object&&type!=undefined&&type!=undefined)
    {
        for(const innerData in type)
        {
            console.log(`${innerData} : ${type[innerData]}`)
        }
    }
}
//console.log(array1);