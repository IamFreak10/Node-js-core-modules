const fs=require('fs');
// fs.writeFileSync("./output/app.log","Appliciation Started\n")
// console.log("File Write Sync");
const logEntry1=`${new Date().toLocaleString()} user logged in\n`;
fs.appendFileSync("./output/app.log",logEntry1);