

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









// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// 4. Given an array of positive integer elements. Print out the count of Prime Numbers and Narcissistic numbers from the array and remove those elements from the array.
// Example:
// Input 1 : [10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11]
// Prime Numbers Count : 4
// Narcissistic Numbers Count : 5
// The updated array : [ 10, 20, 30, 40, 1024 ]






// let b=''

// let a=[10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11];
//          b=[a.length];
//         let j=0;
//         for(let i=0;i<a.length;i++)
//         {
//             let r1= prime(a[i]);
//             let r2= narcissistic(a[i]);
//             if(r1==false && r2==false)
//             {
//                 b[j]=a[i];
//                 j++;
//             }

//         }
//         console.log("The updated array : ");
//         for(let i=0;i<j;i++)
//         {
//             console.log(b[i]);
//         }
    


//     function prime(n)
//     {
//         if(n==1)
//         {
//             return false;
//         }
//         for(let i=2;i<=(n/2);i++)
//         {
//             if(n%i==0)
//             {
//                 return false;
//             }
//         }
//         return true;
//     }


//     function count_digits(n)
//     {
//         let c=0;
//         do
//         {
//             let r=n%10;
//             c++;
//             n=n/10;
//         }while(n!=0);
//         return c;
//     }
//     function narcissistic(n)
//     {
//        let c=count_digits(n);
//         let s=0, n1=n,r;
//         do
//         {
//             r=n%10;
//             s=s+(Math.pow(r,c));
//             n=n/10;
//         }while(n!=0);

//         if(s==n1)
//             return true;
//         else
//             return false;
//     }
   
    
        







