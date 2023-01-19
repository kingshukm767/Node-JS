/*Route level Middleware grouped and external*/
const express=require('express');
const reqFilter=require('./externalMiddleware');
const app=express();
const route=express.Router();
route.use(reqFilter);

app.get('/',(_,res)=>{
    res.send("This is home Page");
});
app.get('/about',(_,res)=>{
    res.send("This is about Page");
});
route.get('/user',(_,res)=>{ //grouped route middleware
    res.send("Welcome User");
});
route.get('/contact',(_,res)=>{ //grouped route middleware
    res.send("This is help page");
});

app.use('/',route);

app.listen(5000);