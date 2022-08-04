//    A FUNCTION CALLING ITSELF IS CALLED RECURSSION

// EXAMPLE: function f1(n){
//             return n;
// }



// i=0;
// function loop(n){
//     if(i==10){
//         return;
//     }
//     else{
//         console.log(i)
//         return loop(i++)
//     }
// }

// loop(i)




//  PROGRAM FOR MULTIPLES OF THREE

// i=50;
// function loop(n){
//     if(i==150){
//         return;
//     }
//     else{
//         console.log(i)
//         return loop(i++)
//     }
// }

// loop(i)







// --------------------------------------------------------------------------------------------------------------------





// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)



// function f(x,y){
//     if (x==0) return y;
//     return f(x-1,x+y)
// }

// console.log(f(5,6))



// --------------------------------------------------------------------------------------------------------------------------
 
// DECIMAL TO BINARY
 
// function f(n){
//     if(n==0) return;
//     console.log(n%2)
//     f(Math.floor(n/2))
// }

// console.log(f(25))




// -------------------------------------------------------------------------------------------------------------------------------




// BINARY TO DECIMAL

// function f(n){
//     if (n % 10 == 0) return;
//     console.log(n)
// } 




// --------------------------------------------------------------------------------------------




// function f(x,y){
//     if(y==0) return 0;
//     return (x+f(x,y-1))
// }

// f(2,3)




// function f2(a,b){
//     if (b==0) return 1;
//     return f(a,f2(a,b-1))
// }

// f2(1,2)




// --------------------------------------------------------------------------------------------------------------


// function f(n){
//     if (n==0 || n==1)  return n;
//     if(n%3 != 0) return 0;
//     return f(n/3)
// }

// f(3)   // the output will be 1 if its in 3 multiple (3 parseries)



// -------------------------------------------------------------------------------------------------------------------------




// function robot(n,a,b){
//     if (n<=0){ return;}
//     console.log(n,a,b)
//     robot(n-1,b,b+n)
//     console.log(n,a,b)
//     robot(n-1,b,a+n)
// }

// robot(2,5,2)




// ---------------------------------------------------------------------------------------------------------------------



// function count(n){
//     var d=1;
//     console.log(n);
//     console.log(d);
//     d++;
//     if (n>1) {count(n-1)};
//     console.log(d)
// }


// count(3)



// ---------------------------------------------------------------------------------------------------------------------------------------


//  RECURSSION FOR FACTORIAL NUMBERS

// i=1;

// function fac(n){
//     if(n<=1) { return 1;}
//     return n*fac(n-1)  
    
// }

// console.log(fac(6))




// ------------------------------------------------------------------------------------------------------------------------



// var n=5
// let fibo = n => {
//     if((n<2) && (n>=0)){
//         return n;
//     }
//     return fibo(n-2)+fibo(n-1)
// }

// for(let i=0;i<=n;i++){console.log (fibo(i))}






// ------------------------------------------------------------------------------------------------------------------------------------



// function sum(n){
//     if(n<=1) { return 1;}
//     return n+sum(n-1)  
    
// }

// console.log(sum(3))




// ------------------------------------------------------------------------------------------------------------------------------------


// function sum(n){
//     if(n<=0) { return 0;}
//     for(i=0;i<=n;i++){
//         s=n%10;
//     }
//     return s+sum(s-1) 
    
// }

// console.log(sum(1234))




// ------------------------------------------------------------------------------------------------------------------------------------



//  TABLE USING FUNCTION



// function mul(s,e){
//     for(i=s;i<=e;i++){
//         console.log(`-------------------  ${i} table --------------------------`)
//         for(let j=0;j<=10;j++){
//             console.log(`${i} x ${j} = ${i*j}`)
//         }
//     }

// }

// console.log(mul(2,5))






// d=''
// function mul(s){
//     for(i=1;i<=10;i++){
//         for(let j=0;j<=10;j++){
//         d=i*s
//         }
//         console.log(`${i} * ${s} = ${d}`)
//     }
        
// }

// console.log(mul(3))



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//  TABLE USING RECURSSION


// function mul(i){
//     if(i==11) return "end";
//     console.log(i)
//     return mul(i+1)
// }

// console.log(mul(1))




// function mul(i,e){
//     if(i==11) return "end";
//     m=i*e
//     console.log(m)
//     return mul(i+1,e)
// }

// console.log(mul(1,2))



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// MULTIPLE TABLE USING RECURSSION



// function mul(s,e){
//     if(e<=0){return }
//     mul(s,e-1)
//     // s++;
//     console.log(`${s} * ${e} = ${s*e}`)
//     // s++;
// }

// console.log(mul(2,10))







