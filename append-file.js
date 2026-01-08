const fs=require('fs');
// fs.writeFileSync("./output/app.log","Appliciation Started\n")
// console.log("File Write Sync");
const logEntry1=`${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./output/app.log",logEntry1);
const logEntry2=~`${new Date().toISOString()} user logged out\n`;