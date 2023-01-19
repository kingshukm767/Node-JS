const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
//console.log(dirPath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/file"+i+".txt","This file is created through input and loop");
// }
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
    
})