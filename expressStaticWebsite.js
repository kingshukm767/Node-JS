const express=require('express');
const path=require('path');

const app=express();
const staticWebsitePath=path.join(__dirname,'staticWebsite');

app.use(express.static(staticWebsitePath));

app.listen(3000);