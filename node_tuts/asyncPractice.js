console.log("Start");
console.log("Logic Start");
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        
       resolve("logic resoved");
        reject("logic reject");

    }, 0);

})
setTimeout(()=>
{
    console.log("0 sec timeout");

},0);



promise1.then((message)=>{
    console.log(message);

}).catch((err)=>
{
console.log(err);
});
promise1.catch((message)=>
{
    console.log(message);
}).finally((mes)=>{
    
    console.log("finally occurs");

});
console.log("End");

 



