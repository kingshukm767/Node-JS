const fs=require('fs');
//const fs=require('fs').writeFileSync;
console.log("Core Global Module");
fs.writeFileSync("hello.txt","learning modules");
console.log('-->',__dirname);
console.log(__filename);
