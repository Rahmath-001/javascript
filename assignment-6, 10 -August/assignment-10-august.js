

// 1. Fibinocci series?



// var n=7

// let fibo = n => {
//     if((n<2) && (n>=0)){
//         return n;
//     }
//     return fibo(n-2)+fibo(n-1)
// }

// for(let i=0;i<=n;i++){console.log (fibo(i))}


//  USING RECURSSION

// n=4
// function fibo(n){
//     // console.log (n)
//     if((n<2) && (n>=0)){
//         return n;
//     }
//     return fibo(n-2)+fibo(n-1);
// }
// console.log (fibo(n))






// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 2. Armstrong/Narcisstic number or not?


// a = 153
// temp = a

// arm=(''+a).length
// console.log(arm)
// sum=0

// for (i=0;i<=arm-1;i++){
//     if(a>0){
//     sum += (a%10)**arm
//     console.log(sum, a)
//     a= (a/10)-(a/10)%1
//     console.log(a)
//     }
// }
// console.log(sum)
// console.log(a)
// if (sum===temp){
//     console.log('a armstrong')
// }
// else{
//     console.log('not armstrong')
// }






//    USING RECURSSION 


// sum = 0
// n = 15
// const   a = String(n).split('');
//     const temp = a.length;
// function check(n) {
//     if(n>0){
//         sum += (n%10)**temp
//         }
//         else
//    return sum;
//     return check( Math.floor(n/10))
// }


// let c = check(n)
// console.log(c)
// if(c==n){
//     console.log("armstrong")
// }
// else{
//     console.log("not a armstrong")
// }





// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 3. Sum of the digits of given number?


// function sum_of_digit(n)
// {
//     if (n == 0){
//     return 0;
//     }
//     return (n % 10 + sum_of_digit(parseInt(n / 10)));
// }

// var num = 231;
//  console.log(sum_of_digit(num))










