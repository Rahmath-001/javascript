

import readlineSync from 'readline-sync'
import color from 'colors-cli'




//  FUNCTION TO INITIALIZE ARRAY AND ACCESS IT.



function matrixinput(name){
    let rows= readlineSync.questionInt(color.magenta(`Enter ${name} number of rows : `))
    let cols= readlineSync.questionInt(color.magenta(`Enter ${name} number of columns : `))
    console.log(`Given matrix is ${name} which has ${color.magenta(rows)} x ${color.magenta(cols)}  dimension`)

    let matrix = new Array(rows)
    for(let i=0;i<matrix.length;i++){                  // initiliazing ARRAY
        matrix[i] = new Array(cols)
    }

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            matrix[i][j] = readlineSync.questionInt(`Enter the element of ${name}  ${color.cyan(i)}${color.cyan(j)} : `)       // ASSIGNING 
        }
    }

    return matrix
}

// console.log(matrixinput())





// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






//   FUNCTION TO PRINT MATRIX


function displaymatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        var str=''
        for(let j=0;j<matrix.length;j++){
           str+=(matrix[i][j])+' '   // DISPLAYING MATRIX
        }
        console.log(str);
    }
}






// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------







//  FUNCTION FOR ACCESING DIAGONAL AND COLOUR.


function print_matrix(matrix,side){
    console.log('--------------------')
    console.log(`${side} side diagonal elements :`)

    for(let i=0;i<matrix.length;i++){
        var emp=''
        for (let j=0;j<matrix[0].length;j++){
            if(((i+j)==(matrix.length-1)) && (side == 'right')){
                emp+= (color.red(matrix[i][j]))+' '
            }
            else if((i==j) && (side == 'left')){
                emp+= (color.blue(matrix[i][i]))+' '
            }
            else{
                emp+=(matrix[i][j])+' '
            }
        }
        console.log(emp)
    }
}







// export default matrixinput
export{matrixinput,displaymatrix,print_matrix}