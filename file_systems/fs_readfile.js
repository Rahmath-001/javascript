import fs from "fs";

fs.readFile("text.txt",(err, data)=>{
    if(err) throw err;
    data=data.toString();
    console.log(data)

})


