// * * * *
// * * *
// * *
// *



// a="* "
// b=''
// for(let i=5;i>=1;i--){
//     // b=b+a;
//     b=''
//     for(let j=i;j>=1;j--){
//         b=b+a;
//     }console.log(b)
// }
// // console.log(b)




// --------------------------------------------------------------------------------------------------------------------------------------




//     *
//    **
//   ***
//  ****
// *****




// s=''

// for(i=1;i<=5;i++){
//     for(j=i;j<=5;j++){
//         s=s+' '
//     }
//     for(let j=1;j<=i;j++)
//     {
//         s=s+i

//     }  
//    console.log(s)
//    s='';
// } 







// ------------------------------------------------------------------------------------------------------------------------------------------------







//     *
//    ***
//   *****
//  *******
// *********


// s=''

// for (i=0;i<=5;i++){
//     for(j=i;j<=5;j++){
//         s=s+' '
//         // console.log(s)
//     }
//     for(let k=0;k<=i;k++){
//         s=s+'* '
//         // console.log(s)
//     }
//     for(j=i;j<=5;j++){
//         s=s+' '
//         // console.log(s)
//     }

//     console.log(s)
//     s=''
// }







// ------------------------------------------------------------------------------------------------------------------------------------------------




// *********
//  ******* 
//   *****  
//    ***   
//     *



// s=''

// for (i=5;i>=0;i--){
//     for(j=i;j<=5;j++){
//         s=s+' '
//         // console.log(s)
//     }
//     for(let k=0;k<=i;k++){
//         s=s+'* '
//         // console.log(s)
//     }
//     for(j=i;j<=5;j++){
//         s=s+' '
//         // console.log(s)
//     }

//     console.log(s)
//     s=''
// }






// ----------------------------------------------------------------------------------------------------------------------------------------------------------





// 1
// 11
// 111
// 1111
// 11111



// b=''
// for(let i=1;i<=5;i++){
//     b=b+1
//     console.log(b)
// }






// -----------------------------------------------------------------------------------------------------------------------------------------------------------



// 1
// 12
// 123 
// 1234
// 12345
// 123456
// 1234567
// 12345678


// b=''
// for(let i=1;i<=8;i++){
//     b=b+i
//     console.log(b)
// }





// -------------------------------------------------------------------------------------------------------------------------------------------------------------------



// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1


// for(i=2;i<=10;i++){
//     console.log(`${i} ${11-i}`)
// }




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------




// 0 * 9 + 8        = 8
// 9 * 9 + 7        = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888



// total=1;
// b=''
// console.log(`0 * 9 + 8 = 8`)
// for(let i=9;i>=1;i--){
//     b=b+i
//     total=(b*9)+(i-2);
//     console.log(`${b} * 9 + ${i-1} = ${total}`)
// }







// -------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 1
// 22
// 333
// 4444
// 55555


// s=''
// for(i=1;i<=5;i++){
//     for(let j=i;j>=1;j--){
//     s=s+i;
//     }
//     console.log(s)
//     s=''
// }






// -------------------------------------------------------------------------------------------------------------------------------------------------------------------




// 54321
// 4321
// 321
// 21
// 1


// count=1
// s=''
// for(i=5;i>=1;i--){
//     for(let j=i;j>=1;j--){
//     s=s+j+'  ';
//     // count++;
//     }
//     console.log(s)
//     s=''
// }






// -------------------------------------------------------------------------------------------------------------------------------------------------------------------






// 1 
// 2 4 
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100


// s=''
// for(i=1;i<=10;i++){
//     s=''
//     for(let j=1;j<=i;j++){
//         // console.log(i*j)
//         s=s+(i*j)+" "
//     }
//     console.log(s)
    
// }








// --------------------------------------------------------------------------------------------------------------------------------------------------------







// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15


// s='';
// count=1;
// for(i=0;i<=5;i++){
//     for(let j=0;j<=i;j++){
//         s=s+count+' '; 
//         count++;
//     }
//     console.log(s)
//     s=''
// }






// -------------------------------------------------------------------------------------------------------------------------------------------------








// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15



// b=''
// count=1
// for(i=5;i>=1;i--){
//     b=''
//     for(let j=i;j>=1;j--){
//         b=b+count+'   ';
//         count++;
//     }
//     console.log(b)

// }







// -----------------------------------------------------------------------------------------------------------------------------------------------------




//              1
//            2 3
//          4 5 6
//       7 8 9 10
// 11 12 13 14 15




// s=''
// count=1
// for(i=1;i<=5;i++){
//     for(j=i;j<=5;j++){
//         s=s+' '
//     }
//     for(let j=1;j<=i;j++)
//     {
//         s=s+count+' '
//         count++
//     }  
//    console.log(s)
//    s='';
// }







// ------------------------------------------------------------------------------------------------------------------------




// A
// AB
// ABC
// ABCD
// ABCDE










// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// A 
// A A 
// A A A 
// A A A A 
// A A A A A



s=''
for(i=1;i<=5;i++){
    for(let j=i;j>=1;j--){
    s=s+'A';
    }
    console.log(s)
    s=''
}






// -------------------------------------------------------------------------------------------------------------------------------------------------------------------





// ASCII number to character

// a = 67
// console.log(String.fromCharCode(67))

// Charaacter to ASCII

// console.log('C'.charCodeAt())






// ------------------------------------------------------------------------------------------------------------------------------------



// 0
// 10
// 210
// 3210
// 43210
// 543210
// 6543210


// i1=''
// n=6;
// for (i=0;i<=n;i++){

//     i1=i+i1;
//     console.log( (i1))
// }






// -----------------------------------------------------------------------------------------------------------------------




//  0 1 1 2 3 5 8 13 21  . .. ... ....


// a=''

// for (i=0;i<=6;i++){
//     console.log(i)
//     a=i+i++
//     console.log(a)
// }



// n2=''
// n1=''
// // for(let i=0;i<=n;i++)
// for(i=0;i<=6;i++){
//     n1=n1+i
// }
// for(j=i;j<=6;j++){
//     n2=n1+j
//     sum=n1+n2;
//     n1=n2                                                       // COMPLETE THROUGH DIFFERENT FOR LOOPS
// n2=sum
// }
// // let sum=n1+n2;
// // n1=n2
// // n2=sum
// console.log(sum)



// function fibinocci(n){
// let n1=0
// let n2=1
// let sum=0
// output=''
// for(i=0;i<=n;i++){
//     output += `${n1} `
//     sum=n1+n2 
//     n1=n2
//     n2=sum
// }
// console.log(output)
// }


// fibinocci(7)









//--------------------------------------------------------------------------------------------------------------------------------------------------------




//  ARMSTRONG OR NARCISSTIC NUMBERS




// a=12
// arm=(''+a).length
// sum=0

// // q=a/10;
// // r=a%10;


// // console.log(arm)
// for (i=0;i<=arm;i++){
//     sum += (a%10)**arm
//     console.log(sum, a)
//     a= (a/10)-(a/10)%1
//     // console.log(a)0.
// }
// if (sum==a){
//     console.log('armstrong')
// }
// else{
//     console.log('not an armstrong')
// }










// ----------------------------------------------------------------------------------------------------
















