


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


const n = [32, -33, 16, -40];

//  n.filter(e=>removepositive(e));

function removepositive(n) {
    for (i in n){
    if (n[i]>0){
        
    }

    }
}








// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 5. WAP to remove duplicates from the given array?
// Ex: input: [2,21,-5.6,21,89,43,-5,09,2,34,43]
    //    output:  [2,21,-5.6,89,34,-5,09,43]






















    
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



