const express=require('express');
const app=express();

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please Enter Your Age');
    }else if(req.query.age<18){
        res.send('You are not authorized to access this page');
    }else{
        next();
    }
}
app.use(reqFilter); //Application level middleware

app.get('/',(_,res)=>{
    res.send("This is home Page");
});
app.get('/about',(_,res)=>{
    res.send("This is about Page");
});

app.listen(5000);