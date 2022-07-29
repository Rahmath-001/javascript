//  program to print individual characters of strings


// var a = "different"


// console.log(a.length)
// console.log(a[6])

// i=0;

// while (i<=a){
// console.log(a.length)
// console.log(a[i])                // string is not a number.
// i++;
// }


// while (i<(a.length)){
//     console.log(a[i])
//     i++;
// }





// var a = "different"
// i = 1;
// while (i<(a.length)){
//     console.log(a[i])
//     i+=2;
// }



// var a = "different"
// i = 0;
// while (i<(a.length)){
//     console.log(a[i])
//     i+=2;
// }



// a = ['a','b', 'c','d']

// i = 3;
// while (i<(a.length)){
//     console.log(a[i])
//     i++;
// }



// a = {1:'a', 2:'b', 3:'c', 4:'d'}


// console.log(a)
// console.log(Object.values(a))
// console.log(Object.keys(a))

// l=Object.keys(a)
// console.log(l.length)

// i = 3;
// while (i<(a.length)){
//     console.log(a[i])
//     i++;
// }

// a = {1:'a', 2:'b', 3:'c', 4:'d'}

// l=Object.keys(a)
// v=Object.values(a)
// console.log(l.length)

// i=0;
// while (i<l.length){
//     console.log(l[i], ':', v[i])

//     i++;
// }






















// CONFIRM WHETHER GIVEN NUMBER IS A 3 DIGIT NUMBER ?

// var a=9996;
// if ((a<1000) && (a>99)){
//     console.log(`the number is 3 digit`)
// }
// else{
//     console.log('its not a 3 digit number')
// }






// CONFIRM WHETHER GIVEN NUMBER IS AN 'N' DIGIT NUMBER ?


// var a=59588;
// a=`${a}`
// console.log(+a.length)






// STUDENT > 75%
// IF HE HAS MORE THAN 75, ALLOW IN EXAM
// IF HE DOESNT HAS ASK FOR PERMISSION, IF YES ALLOW HIM


// a=75;
// if (a>=75) {
//     console.log("enter the exam hall")
// }
// else if (a<75){
//     console.log('ask permission')
// }
// else{
//     console.log('not allowed in exam')
// }







// FIND WETHER THE GIVEN NUMBER IS PRIME OR NOT.

// var n=99;
// let check = 0;

// if (n == 1){
//     console.log("1 is neither prime nor composite")
// }
// else{
// for (i=2;i<n;i++){

//     if ((n%i) == 0 ){
//         console.log("its not a prime number")
//         console.log(n%i,i)
//         check=1;
//     } 

// }
//  if(check == 0) {
//     console.log('its a prime number')
// }
// }


// n % 1
// n%n

// var n=4;

// if(((n%1)==0) && ((n%n)==0)){
//     console.log('its a prime number')
// }
// else{
//     console.log('its not a prime number')
// }