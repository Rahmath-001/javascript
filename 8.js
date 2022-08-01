// CONTINUE , BREAK


// break - it stops the iteration
// continue - skips current iteration.


// for(i=1;i<=10;i++){
//     // console.log(i)
//     if(i==5){
//     // break;
//     continue;
//     }
//     console.log(i)
// }





// ------------------------------------------------------------------------------------------


// i=1
// while(i<=10){
//     // console.log(i)
//     if(i==5){
//         // break;
//         i++;
//         continue;
//         // console.log(i);
//     }
//     console.log(i)
//     i++;
// }









//  --------------------------------------------------------------------------------------------------------------------------------------




// SYNTAX OF FUNCTION

// function declaration
// function fname( parameters ){
//     task / statements
// }

// function_name( arguments )    // function call back -  the functiion will not run unitl you call it back



// function without parameters.
// function add(a,b){
//     console.log(a)
//     console.log(b)
//     console.log(a+b)
// }
// console.log(add())

// add(3,6)
// add(8,5)




//  1. PRE-DEFINED / BUILT-IN  FUNCTIONS
//  2. USER DEFINED FUNCTION
//  3. RECURSIVE  





// function even(a){
//     if((a%2)==0){
//         console.log(a,'its a even number')
//     }
//     else{
//         console.log(a,'its not a even number')
//     }
// }

// for(i=1;i<=5;i++){
//     even(i)
// }




// function test(a){
    // return a;
    // console.log(1)
    // console.log(2)
    // console.log(3)
// }

// c= test(2)
// console.log(c)
// console.log(test(2))



// ---------------------------------------------------------------------------------------------------------------------------------------------------------



// a = {1:'a', 2:'b', 3:'c', 2:'d', 1:'e', 3:'f'}
a = {'1':1, b:2, b:3, '3':4 }
// console.log(a)
// console.log(Object.keys(a))
// console.log(Object.values(a))
// console.log(a[b])
// console.log(a['b'])
// console.log(a.b)
// console.log(a['b'])

// ADDING an item
// a['b'] = 4
// console.log(a)

// removal of an item
// delete a['b']
// console.log(a)





//  PROGRAM TO FIND THE MAX NUMBER IN THE GIVEN ARRAY
// a=[1,3,25,3]
// function max(a){

//     for(i=0;i<=5;i++){
//         if (a[i]>1-i){
//             console.log(i,'is the max number')
//         }
//     }
// }

// max(a)
// a = [1,2,3,4]
// for(i=0;i<=10;i++){
//     if(a[i]>1){
// console.log(a[i])
//     }
// }



a=[2,42,1,3,65]
// console.log(a.sort())

function max(a){
    s = a[0]
    for(i=0;i<=(a.length-1);i++){
        // console.log(a[i]>a)
        if((a[i]) > s){
         s = a[i]
        //  console.log(a)
        }
    }
    return s
}

console.log(max(a))
