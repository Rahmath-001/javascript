

import readlineSync from 'readline-sync'

function matrixinput(name){
    let rows= readlineSync.questionInt(`Enter ${name} number of rows : `)
    let cols= readlineSync.questionInt(`Enter ${name} number of columns : `)
    console.log(`Given matrix is ${name} which has  ${rows} x ${cols} dimension`)

    let matrix = new Array(rows)
    for(let i=0;i<matrix.length;i++){                  // initiliazing ARRAY
        matrix[i] = new Array(cols)
    }

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            matrix[i][j] = readlineSync.questionInt(`Enter the element of ${name}  ${i}${j} : `)       // ASSIGNING 
        }
    }

    return matrix
}

// console.log(matrixinput())






//   FUNCTION TO PRINT MATRIX

// let mat = matrixinput()

function displaymatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        var str=''
        for(let j=0;j<matrix.length;j++){
           str+=(matrix[i][j])+' '   // DISPLAYING MATRIX
        }
        console.log(str);
    }
}

// displaymatrix(mat)




// export default matrixinput
export{matrixinput,displaymatrix}