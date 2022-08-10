


//  1. WAP to Check whether given year is a leap year or not?
   


// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(`${year} is a leap year `);
//     } else {
//         console.log(`${year} is not a leap year `);
//     }
// }

// console.log(checkLeapYear(1919));







// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





// 2. WAP to check whether given string is a palindrome or not?

// a='madam'

// function palindrome(n){
//     for(let i=0;i<=(n.length/2);i++){
//         if (n[i] !== n[n.length - 1 - i]) {
//             return 'It is not a palindrome';
//        }
//     }
//  {console.log('its a palindrome')}
// }

// console.log(palindrome(a))









// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 3. WAP to find sum of all the digits of given input number? 



// function sum(n){
//     if(n<=0) { return 0;}
//     for(i=0;i<=n;i++){
//         s=n%10;
//     }
//     return s+sum(s-1) 
    
// }

// console.log(sum(678))








// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// 4. WAP to delete all the positive numbers from the arr
//Note : Do not create separate Array, Remove the positive elements from the existing array.



// function removepositive(n) {

//     for ( let i = 0; i < n.length; i++) {
//         if(n[i] == n[-i]) {

//         }
//     }
// }

// const n = [32, -33, 16, -40];

// for (i=0;i<=n.length-1;i++){

//     if(n[i]>=0){
//         n.splice(0,1)
//     }
//     console.log(n)
// }

//  n.filter(e=>removepositive(e));

// function removepositive(n) {
//     for (i of n){
// console.log(i)
//     if (i>0){
//         c=a;
//         a=b;
//         b=c;
//     }


//     }
// }

// console.log(removepositive(n))


// i=0;

// // for (i=0;i<=n.legth-1;i++){
//     // if (n[i]>0){
//         n[i+2]=n[i];
//      n[i]=n[i+1];
//      n[i+1]=n[i+2];
     
//     // }
// // }
// console.log(n)






















// let n = [9, -4, 32, -1, 17, -33, 16, -40]
// function remove(){
//     console.log(n)
//     n.sort(function(a,b){return a - b })
//     // console.log(arr)
//     for(i=n.length-1;i>=0;i--){
//     if(n[i]<0){
//         n.pop()
//     }
//     }
//     console.log(n)
// }
// remove()

















// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 5. WAP to remove duplicates from the given array?
// Ex: input: [2,21,-5.6,21,89,43,-5,09,2,34,43]
    //    output:  [2,21,-5.6,89,34,-5,09,43]




// var a = [3,7,16,9,7,3,12,16];
//     function Duplicate(a) {
//         console.log(a)
//         var e = [];
//         for(i=0; i < a.length; i++){
//             if(e.indexOf(a[i]) === -1) {
//                 e.push(a[i]);
//             }
//         }
//         return e;
//     }
//     console.log(Duplicate(a));

















    
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



