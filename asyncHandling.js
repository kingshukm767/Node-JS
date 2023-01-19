console.log("Program Execution...");
setTimeout(()=>{
    console.log("Logic Execution..."),2000
})
console.log("Complete Execution...");

let a=10;
let b=0;
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    })
});
waitingData.then((data)=>{
    console.log(a+data);
})
