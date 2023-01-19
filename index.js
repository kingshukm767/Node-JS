let app=require('./app');
//console.log("Welcome to node");
let a=10;
let b=20;
//console.log(a+b);
console.log(app);
console.log(app.y);
console.log(app.z());
let arr=[2,3,4,6,3,2,1,8];
console.log(arr);
let result=arr.filter((item)=>{
    return item>3;
});
console.log(result);
