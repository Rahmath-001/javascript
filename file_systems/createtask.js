import readlineSync from "readline-sync"
import fs from "fs"

let fileData;

let taskname=readlineSync.question("Enter the task : ");

fs.readFile("tasks.json", (err,data)=>{
    if (err) throw err;
    console.log(data);
    fileData=JSON.parse(data);
    // console.log("UP",fileData);
    console.log(taskname)

    fileData.push(taskname)

    console.log(fileData)


fileData=JSON.stringify(fileData)

fs.writeFile("tasks.json", fileData, (err)=>{
    if (err) throw err;
    console.log("Task added successfully");
})

})


// console.log("Down",fileData);