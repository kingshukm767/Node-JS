const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(`
    <h1>Welcome, To my Home Page</h1><a href="/about">Go to About Page</a>
    `);
});
app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
});
app.get('/contact',(req,res)=>{
    res.send(`[{
        name:"Kingshuk Majumder",
        email:"kingshukm767@gmail.com"
    },
    {
        name:"Kriti Majumder",
        email:"kingshukm2021@gmail.com"
    }

]`);
});
app.listen(3000);