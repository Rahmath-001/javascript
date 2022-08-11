

import readlineSync from 'readline-sync'

function matrixinput(){
    let rows= readlineSync.questionInt("Enter number of rows : ")
    let cols= readlineSync.questionInt("Enter number of columns : ")
    console.log(`Given matrix is ${rows} x ${cols} dimension`)

    let matrixa = new Array(rows)
    for(let i=0;i<matrixa.length;i++){                  // initiliazing ARRAY
        matrixa[i] = new Array(cols)
    }

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            matrixa[i][j] = readlineSync.questionInt(`Enter the element of ${i}${j} : `)       // ASSIGNING 
        }
    }

    return matrixa
}

// console.log(matrixinput())



//   FUNCTION TO PRINT MATRIX

let mat = matrixinput()

function displaymatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        var str=''
        for(let j=0;j<matrix.length;j++){
           str+=(matrix[i][j])+' '   // DISPLAYING MATRIX
        }
        console.log(str);
    }
}

displaymatrix(mat)


