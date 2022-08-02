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






i=50;
function loop(n){
    if(i==150){
        return;
    }
    else{
        console.log(i)
        return loop(i++)
    }
}

loop(i)

