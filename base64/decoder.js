// import readlineSync from "readline-sync";
import base64encoding from './encoder.js'


//  check the input is a valid base64 & check for ==
// get base64 decimal values. 
// convert decimal to 6bit binary 
// join everything. (concatenate)
// remove last zeros accord  to equal count.
// split into 8 bits.
// convert to decimal.
// ASCII array.
// Join and display ASCII string.



// var encodedString = "SEKSMA"

// var decodedString = atob(encodedString);
// console.log(decodedString);

// spread operator are highly used in react.






// let base64encoding = "SEVMTE8=";
// let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// console.log(finalbase64string)

 let deencoding=base64encoding.toString()
let dec=deencoding.split()
console.log(dec)


// let lastelement=binarycode6bit[binarycode6bit.length-1]
var counter=0;
if(dec[dec.length-1] == "="){
    dec.pop()
    counter++;
    if(dec[dec.length-1] == "="){
    dec.pop()
    counter++;
    }
}

let decimal =  dec.map((num) =>base64.indexOf(num))
console.log(decimal)


let binary = decimal.map((bin) =>bin.toString(2))   // decimal.toString(2)
console.log(binary)

let binarycode6bit=binary.map((bin)=>{
    while(bin.length<6){
       bin="0"+bin;
    }
    return bin;
    })
   console.log(binarycode6bit) 

// let binary8bit = binarycode6bit.join("")

// console.log(binary8bit)

let lastelement = binarycode6bit[binarycode6bit.length-1]
while(counter>0){
//   lastelement = lastelement.split("")
  lastelement =lastelement.slice(0,lastelement.length-2)
  counter--;
}
binarycode6bit.pop()
binarycode6bit.push(lastelement)

binarycode6bit=binarycode6bit.join("").split("");

console.log(binarycode6bit)
let binarycodejoin=[];
    while(binarycode6bit.length !=0){
        binarycodejoin.push(binarycode6bit.splice(0,8).join(""))
    }
console.log(binarycodejoin)

let bintodec = binarycodejoin.map((char)=>parseInt(char,2));
console.log(bintodec)

let decode=bintodec.map((temp) => String.fromCharCode(temp))
console.log(decode)

export default decode;
