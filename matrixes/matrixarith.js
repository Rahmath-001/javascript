import { matrixinput,displaymatrix} from "./matricesbase.js";

function matrixsum(){
    let matrixa = matrixinput('Matrix A')
    console.log(`matrix A is : `)
    displaymatrix(matrixa)

    let matrixb = matrixinput('Matrix B')
    console.log(`matrix B is : `)
    displaymatrix(matrixb)

    if((matrixa === matrixb) && (matrixa[0].length === matrixb[0].length)){
        let c = new Array(matrixa.length)
        for(let i=0;i<c.length;i++){
            c[i]=new Array(matrixa[0].length)
        }

        for(let i=0;i<c.length;i++){
           for (let j=0;j<c[0].length;j++){
            sum[i][j] = matrixa[i][j] + matrixb[i][j]

            }
        }
        console.log(`The sum of two matix is : `)
        displaymatrix(c)

    } 
        
    else{
        console.log(`Matrix addition not possible`)
        }

}

matrixsum()