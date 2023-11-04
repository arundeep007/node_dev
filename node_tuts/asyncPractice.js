console.log("Start");
console.log("Logic Start");

setTimeout(()=>
{
    console.log("0 sec timeout");

},0);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("logic end");

       // resolve("logic resoved");
        reject("reject");

    }, 1000);

})

promise1.then((message)=>{
    console.log(message);

}).catch((err)=>
{
console.log(err);
});
promise1.catch((message)=>
{
    console.log(message);
});
console.log("End");



