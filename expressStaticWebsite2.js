const express=require('express');
const path=require('path');

const app=express();
const staticWebsitePath2=path.join(__dirname,'staticWebsite');

app.get('/',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/`);
});
app.get('/about',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/about.html`);
});
app.get('/help',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/contact.html`);
});

app.get('*',(_,res)=>{
    res.sendFile(`${staticWebsitePath2}/404.html`);
});


app.listen(3000);