
import readlineSync from 'readline-sync'
import color from 'colors-cli'
import {matrixinput,displaymatrix,print_matrix} from './matricesbase.js'



function diognal(){
    let matrix = matrixinput('diagonal')
    displaymatrix(matrix)

    if(matrix.length != matrix[0].length){
        return 'Not a square matrix'
    }
    else{
        print_matrix(matrix,'right')
    }
}

diognal()



