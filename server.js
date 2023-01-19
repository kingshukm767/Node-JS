const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1>Hello this is server side testing</h1>");
    res.end();
}).listen(8080);