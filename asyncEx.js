console.log("Program Execution...");
setTimeout(()=>{
    console.log("Logic Execution..."),2000
})
console.log("Complete Execution...");

let a=10;
let b=0;
setTimeout(()=>{
    b=20;
})
console.log(a+b);