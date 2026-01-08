const fs = require('fs');
const content1 = 'This Is A Content \n nodejs is awsome!!';
try {
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("File Write Sync");
} catch (error) {
    console.error(error.message);
}
const conetnt2="Thsi Is a conent tooo \n asyncchronus!!";
fs.writeFile("./output/test-async.txt",conetnt2,(error)=>{
    if(error){
        console.error(error.message);
    }else{
        console.log("File Write Async");
    }
})