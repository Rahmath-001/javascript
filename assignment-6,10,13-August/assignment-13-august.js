
//1.WAP to Multiply two numbers without using multiplication symbol?


a = 12 , b = 11

function multiply(a,b){
    let Result;
    console.log(a,b);
    if((a%2)==0){
        Result = 0;
    }
    else{
        Result = b;
    }
    while (a>1){
        a = Math.floor(a/2)
        b = b*2;
        if((a%2)!==0){
            console.log(a,b);
            Result += b;
        }
        else{
            console.log(a,b,"*")
        }
    }
    return Result;
}
console.log(multiply(2,11))











// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 2. Write a function that pre-pends(adding as pre-fix) a zero to single digit numbers


// function array(){
//    let a = [1,2,45,65,8,9]
//     empty = []
// for (i=0;i<a.length;i++){
//     let n = '0'
// if(a[i]>-10 && a[i]<10){
//     n += a[i]
// empty.push(n)
// // console.log(empty)
// }
// else{
//     n = ''
//     empty.push(n+a[i])
// }
// }
// console.log(empty)
// }
// array()













// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







//3. Write an algorithm to Split the Input String into two strings based on even and odd indexes.
// Left pad with '000' and right pad with '111' to the split string and display the output.



// function string(n){
//   n.split()
//   a = "000"
//   b = "111"
//   c = ""
//   d = ""
//   for (i = 0; i < n.length; i++){
//     if((i%2)==0){
//         c += n[i]
//     }
//     else{
//         d +=n[i]
//     }
//   }
//  console.log(a+c+b)
//  console.log(a+d+b)
// }
// string(" DANGER ")














// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







// 4.Split the array and add the first part to the end. 
// There is a given array and split it from a specified position, and move the first part of array add to the end.



// function swap(n){
//     let a =  [1,2,3,4,5,6]
//     b = a.splice(0,n)
//     while(n>0){
//     c = b.shift()
//     a.push(c)
//     n = n-1
//     }
//     console.log(a)
//     }
//     swap(3)










// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






//5. Defang IPv4 and Validate


// function ip(a){
// let b = a.split(".")
// let c = b.join(".")
// flag = true
// for(i=0;i<=b.length-1;i++){
//     if(b[i]<0 && !(b[i]>=255) || b[i]>0 && !(b[i]<=255)){
//         flag = false
//     }
// }
// if(flag==false){
//     console.log("invalid")
// }
// else{
//     console.log("valid")
// }
// }
// ip("255.255.255.255")











// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 6. Write an algorithm to convert 24 hours format time to 12 hours format time.


// function time(a){
// b = a.split(":")
// if(b[0]>12){
//     d = b[0]-12
//     console.log(`${d}:${b[1]} PM`)
// }
// else{
//     console.log(`${b[0]}:${b[1]} AM`)
// }
// }
// time("21:30")






