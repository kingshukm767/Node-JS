const express=require('express');
const path=require('path');

const app=express();
const staticWebsitePath2=path.join(__dirname,'staticWebsite');
app.set('view engine','ejs');

app.get('/',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/`);
});
app.get('/about',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/about.html`);
});
app.get('/profile',(_,res)=>{
    const user={
        name:"Kingshuk Majumder",
        email:"kingshukm767@gmail.com",
        city:"Agartala",
        skill:['PHP','JS','Node','Java']
    };
    res.render('profile',{user});
});
app.get('/login',(_,res)=>{
    res.render('login');
});
app.get('/help',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/contact.html`);
});

app.get('*',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/404.html`);
});


app.listen(3000);