 const fs=require("fs");
 fs.writeFileSync("./output/temp.txt","This Is A Temp File\n");
 console.log("File created");
 if(fs.existsSync("./output/temp.txt")){
    console.log("File Exists");

    fs.unlinkSync("./output/temp.txt");
    console.log("File Deleted");
 }
 try {
    fs.unlinkSync("./output/temp.txt");
    console.log("File Deleted");
 } catch (error) {
    console.error(error.message);
 }
 fs.writeFile("./output/temp2.txt","This Is Also A Temp File\n",error=>{
   if(err) return console.error(error.message);
   console.log("Another File Created");
   fs.unlink("./output/temp2.txt",error=>{
    if(err) return console.error(error.message);
    console.log("Temp2 File Deleted");
   })
 })