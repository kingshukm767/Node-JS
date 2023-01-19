const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
//fs.writeFileSync(`${dirPath}/apple.txt`,"This file will use for CURD operation");
filePath=`${dirPath}/apple.txt`;
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });
// fs.appendFile(filePath,"This part is added using file append method",(err)=>{
//     if(!err) console.log('File update successfully');
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('File renamed successfully');
// })
fs.unlinkSync(`${dirPath}/file0.txt`);