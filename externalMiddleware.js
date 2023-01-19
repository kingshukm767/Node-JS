/*External middleware page for middleware2.js and middleware3.js file */
module.exports=reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please Enter Your Age');
    }else if(req.query.age<18){
        res.send('You are not authorized to access this page');
    }else{
        next();
    }
}