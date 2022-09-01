//  ASYNCHRONOUS



// console.log("Hello World")       // synchronous operations work in stacks, it works one task at a time.


// // artificial delay is asynchronous.

// setTimeout(() => {
//     console.log("i am here after 3 sec")
//     setTimeout(()=> {
//         console.log("i am here after 4 sec")
//     },4000);
// }, 3000);       //to delay output for onesecond.   we put it in milisecond.




// setTimeout(() => {
//     console.log("i am here after 5 sec")
// }, 5000);       



// setTimeout(() => {
//     console.log("When am i displaying")
// }, 0);       




// // for (let i=0;i<50000;i++){
// //     console.log(i);
// // }
// console.log("Good Morning ! Let's try not to sleep")




















//  ASYNCHRONOUS
console.log("Hello World")       // synchronous operations work in stacks, it works one task at a time.


let a= () => {
    console.log("i am here after 3 sec")
    setTimeout(()=> {
        console.log("i am here after 4 sec")
    },4000);
}

// artificial delay is asynchronous.

setTimeout(a, 3000);       //to delay output for onesecond.   we put it in milisecond.


// for (let i=0;i<50000;i++){
//     console.log(i);
// }

let b = () => {
    console.log("i am here after 5 sec")
}
setTimeout(b, 5000);       

let c = () => {
    console.log("When am i displaying")
}

setTimeout(c, 0);       



console.log("Good Morning ! Let's try not to sleep")
