//1. we can exports using module.export 


const add = (a,b)=>
{
    return a+b; 
}
//2
//if u want to export only single element 
module.exports = add;

const subtract = (a,b)=>
{

    return a-b;
}

//exporting more than single elements

// add:add , subtract:subtract acc. to es2015 rule you can use single name for same key value pairs
//2
/*module.exports =
{
    add,
    subtract
}*/

//3 you can use mode.export.elemnt for each element 

module.exports.add = (a,b)=>
{
    return a+b;
}
module.exports.subtract = (a,b)=>
{
    return a-b;
}

// or u can simply use exports.add() instead of modeule.export 
//but module.export is recommend

