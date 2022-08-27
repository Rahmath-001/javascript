import readlineSync from 'readline-sync'
import color from 'colors-cli'
import { matrixinput,displaymatrix} from "./matricesbase.js";







// function matrixsum(){
//     let matrixa = matrixinput('Matrix A')
//     console.log(`matrix A is : `)
//     displaymatrix(matrixa)

//     let matrixb = matrixinput('Matrix B')
//     console.log(`matrix B is : `)
//     displaymatrix(matrixb)

//     if((matrixa === matrixb) && (matrixa[0].length === matrixb[0].length)){
//         let c = new Array(matrixa.length)
//         for(let i=0;i<c.length;i++){
//             c[i]=new Array(matrixa[0].length)
//         }
//         for(let i=0;i<c.length;i++){
//            for (let j=0;j<c[0].length;j++){
//             sum[i][j] = matrixa[i][j] + matrixb[i][j]

//             }
//         }
//         console.log(`The sum of two matix is : `)
//         displaymatrix(c)
//     } 
//      else{
//         console.log(`Matrix addition not possible`)
//         }
// }

// matrixsum()






//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// function diognal(){
//     let matrix = matrixinput('diagonal')
//     displaymatrix(matrix)

//     if(matrix.length != matrix[0].length){
//         return 'Not a square matrix'
//     }
//     else{
//         let left_sum =0
//         let right_sum =0
//         for(let i=0,j=matrix.length;i<matrix.length,j>0;i++,j--){
//             left_sum +=matrix[i][i]
//             right_sum +=matrix[i][j]
//         }
//         let diff = left_sum - right_sum
//         if(diff >=0) console.log(color.green_bbt(diff))
//         else console.log(color.blue_bbt(diff * -1))
//     }

// }
// diognal()







function diognal(){
    let matrix = matrixinput('diagonal')
    // displaymatrix(matrix)

    if(matrix.length != matrix[0].length){
        return 'Not a square matrix'
    }
    else{
        displaycolor(matrix)
    
    }
}

diognal()


function displaycolor(matrix){

 for(let i=0;i<matrix.length;i++){
        var left=''
        for(let j=0;j<matrix[0].length;j++){
        left+=(matrix[i][j])+''
    }
    console.log(color.green(left))
    // return left
}

// for(let i=0,j=3;i<3,j>=0;i++,j--){
//     var right=''
//     right+=(str[i][j])+''
//     right=color.red(right)
//     return right
// }

}