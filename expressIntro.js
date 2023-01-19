const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    console.log("Data send by browser-->>",req.query.name);
    res.send("Welcome, To my Home Page, "+req.query.name);

});
app.get('/about',(req,res)=>{
    res.send("Welcome,To About Page");
});
app.get('/contact',(req,res)=>{
    res.send("Welcome,To Contact Page");
});
app.listen(3000);