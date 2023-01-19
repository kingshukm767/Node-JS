/*Route level Middleware single multiple and external*/
const express=require('express');
const app=express();
const reqFilter=require('./externalMiddleware');
//app.use(reqFilter);

app.get('/',(_,res)=>{
    res.send("This is home Page");
});
app.get('/about',(_,res)=>{
    res.send("This is about Page");
});
app.get('/user',reqFilter,(_,res)=>{ //single route middleware
    res.send("Welcome User");
});

app.listen(5000);