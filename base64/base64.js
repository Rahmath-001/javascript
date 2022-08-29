import readlineSync from "readline-sync";
import base64encoding from './encoder.js'
import base64decode from './decoder.js'


// console.log(` Please Enter your Choice : `)

function base64(){



console.log(`\n-------------------------------------------------`)
console.log(`BASE 64 CLI APPLICATION`)
console.log(`-------------------------------------------------`)

console.log(`Enter your choise : \n 1. ENCODE - 0 \n 2. DECODE - 1 \n 3. EXIT - 2 \n`)

let choice=readlineSync.questionInt(`Please select an option : `)


while (!(choice >=0 && choice<=2)){
    choice=readlineSync.question(`INVALID option, please try again : `)
}



switch (choice){
case 0:
console.log(`The encoded string is : `, base64encoding() );
    break;

case 1:
    console.log(`The decoded string is : `,base64decode());
    break;

case 2:
    console.log(`THANK YOU for using our Application......`);
    break;

default:
    console.log(` INVALID INPUT ..........`);
}

 let shouldcontinue=readlineSync.question("\nDo you want to continue ? (y/n) : ")
 if(shouldcontinue == "y"  || shouldcontinue== "Y" || shouldcontinue== "yes"  || shouldcontinue== "YES" ) {
    base64();
 }
 else {
    console.log("\nTHANK YOU for using our Application......\n")
 }

}
base64()
