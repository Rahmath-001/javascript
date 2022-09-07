// let prom = new Promise((res,rej)=>{
//     res("CFI")
// })



// prom 
// .then((res)=>{
//     console.log(res)
//     console.log("promise resolved")
// })

// .catch((rej)=>{
//     console.log(rej)
//     console.log("erroe, promise rejected")
// })




let p=new Promise((res,rej)=>{
    let a=1;
    if(a+0==1){
        res("success");
    }
    else{
        rej("failure");
    }
})


p
.then((res)=>{
    console.log(res);
})

.catch((rej)=>{
    console.log(rej);
})

.finally(()=>{
    console.log("promise DONE!!!")
})
