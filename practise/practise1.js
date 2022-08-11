import readlineSync from 'readline-sync'

function basematrix(){
    let row= readlineSync.questionInt(" enter nnumber of rows : ")
    let col= readlineSync.questionInt(" enter nnumber of columns : ")
console.log(`The dimension of matix is ${row} x ${col} `)

    let matrix = new Array(row)
    for (let i=0;i<matrix.length;i++){
        matrix[i] = new Array(col)
    }

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            matrix[i][j] = readlineSync.questionInt(` storing the values of elements in ${i}${j} :  `)
        }
    }
    // console.log(matrix)
return matrix;
}
// console.log(basematrix())
let mat = basematrix()

var mix=''
function matrixdisplay(matrix){
    for(let i=0;i<matrix.length;i++){
        var mix=''
        for(let j=0;j<matrix.length;j++){
            mix+= matrix[i][j]+' '
        }
        console.log(mix)
        }
}
matrixdisplay(mat)