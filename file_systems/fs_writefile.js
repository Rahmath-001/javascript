import fs from "fs";


/*
FS WRITE FILE NEEDS     
 1) GIVE FILE NAME
 2) DATA THAT HAS TO BE WRITTEN /FILE CONTENT
 3) CALL BACK FUNCTION 


*/

let str="Hello file systems"
let obj= {
    a:1,
    b:4,
    c:3
}


fs.writeFile("text.txt",str, (err)=>{
    if(err) throw err;
    console.log("Saved!")
})
