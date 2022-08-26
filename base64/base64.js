// import readlineSync from "readline-sync";
import base64encoding from './encoder.js'
import decode from './decoder.js'


console.log(` Please Enter your Choice : `)

function base64(){
switch (base64){
case 0: 
    console.log(`1. ENCODE` );
    base64encoding()
    break;

case 1:
    console.log(`2. DECODE`);
    decode()
    break;

case 2:
    console.log(`3. REPEAT`);
    base64();
    break;

case 3:
    console.log(`4. EXIT`);
    break;

default:
    console.log(` THANK YOU.....`)
}
}
base64()
