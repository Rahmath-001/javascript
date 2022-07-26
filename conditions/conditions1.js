// write a program to decide a given number is a positive/negative/zero


// var a=-6;


// if (a>0){
//     console.log("its a positive number")
// }

// else if(a<0){
//     console.log("its a negative number")
// }

// else{
//     console.log("its a zero")
// }





// if (a<0){
//     if (a>0){
//         console.log('its a positive number')
//     }
//     else{ 
//     console.log("its a negative number")
//     }
// }
// else if(a==0){
//     console.log('its a zero')
// }
// else{
//     console.log('wrong input')
// }









// program to find even or odd number

// var a = 3; 

// if ((a%2)==0){
//     console.log('its a even number')
// }

// else{
//     console.log('its a odd number')
// }










// program to ddecide which number is greater.


// var a=2,b=12;


// if (a>b){
//     console.log(`${a} a`)
// }

// else if (a<b){
//     console.log(`${b} b`)
// }

// else{
//     console.log('wrong input')
// }




// if (a<b){
//     if(a>b){
//         console.log(`${b} b`)
//     }
//     else{
//      console.log(`${a} a`)                
//     }                                      
// }                                         

// else{
//     console.log('wrong input')
// }


// var a='3',b="hfhf";

// if ((+a)<=(+b)){
//     if (a==b){
//         console.log(`both are equal`)
//     }
//     else{
//         console.log(`${b} - b is greater`)
//     }
// }                                                        // COMPLETE PROGRAM AND SHOW TO SIR  /  do with simple condition at start.
// else if ((+a)>(+b)){
//     console.log(`${a} - is greater`)
// }
// else{ console.log('NaN')}
// else {
//     console.log(`${a}-a  ${b}-b  invalid input`)
// }




// var nan;

// if (nan){console.log('hi')}











// program to print sounds when in multiple of 3 and 5.


// var a=37;

// if (((a%3)==0) && ((a%5)==0)){
//     console.log('its multiple of both 3 and 5')
// }

// else if ((a%5)==0){
//     console.log('buzz')
// }

// else if ((a%3)==0){
//     console.log('fizz')
// }

// else{
//     console.log('not a multiple of 3 and 5')
// }



// var a=40;

// if (((a%3)==0) && ((a%5)==0)){
//     if (((a%3)!==0) && ((a%5)!==0)){
//         console.log('its a multiple of 3 and 5')
//     }
//     else if ((a%3)==0){
//         console.log('fizz')
//     }                                                  //   COMPLETE THE CODE   /  USE OF IF...IF
//     else if ((a%5)==0){
//         console.log('buzz')
//     }
//     console.log('its not a multiple of 3 and 5')
// }
// else{console.log('its not a multiple of 3 and 5')}


// var a=40;

// if (((a%3)==0) || ((a%5)==0)){
//     if (((a%3)==0) && ((a%5)==0)){
//         console.log('its a multiple of 3 and 5')
//     }
//     else if ((a%3)==0){
//         console.log('fizz')
//     }
//     else if ((a%5)==0){
//         console.log('buzz')
//     }  
// }
// else{console.log('its not a multiple of 3 and 5')}









// PROGRAM TO FIND GREATEST OF THREE NUMBERS.


// var a=3,b=3,c=1

// if (a>b && a>c){
//     console.log(`${a} a`)
// }

// else if (a<b && b>c){                  // complete the program
//     console.log(`${b} b`)
// }

// else if (c>a && c>b){
//     console.log(`${c} c`)
// }

// else if (c>a && c>b){
//     console.log(`${c} c`)
// }

// else{
//     console.log('wrong input')
// }



var a=4,b=4,c='hello'

if (+a==+b || +b==+c || +c==+a){
    
    if (a==b && b==c && c==a){
        console.log('all are equal')
    }
    else if (a>b && a>c){
        console.log(`${a} a`)
    }
    else if (a<b && b>c){                  
        console.log(`${b} b`)
    }
    else if (c>a && c>b){
        console.log(`${c} c`)
    }
    else if (a==b){
    console.log(' a and b are equal ')
    }
    else if (b==c){
        console.log(' b and c are equal ')
    }
    else if (c==a){
        console.log(' a and c are equal ')
    }
    else {
        console.log('invalid 2 input')
    }
} 

else {
    console.log('invalid input')
}

if (a>b && a>c){
    console.log(`${a} a`)
}
else if (a<b && b>c){                  
    console.log(`${b} b`)
}
else if (c>a && c>b){
    console.log(`${c} c`)
}