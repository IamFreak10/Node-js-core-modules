const { error } = require('console');
const fs=require('fs');
console.log("Start reading.....")
fs.readFile("./data/diary.txt","utf-8",(error,data)=>{
    if(error){
        console.error(error.message);
    }else{
        console.log("File Content:")
        console.log(data);
    }
})
console.log("This runs immediately -no blocking");