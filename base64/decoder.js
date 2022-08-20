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






let finalbase64string = "SEVMTE8=";
let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

if (finalbase64string == ( "==" || "=")){
    finalbase64string.pop()
}

else {
     finalbase64string.map((num) =>base64.indexOf(num))
}

console.log(finalbase64string)
console.log(dec)
console.log(final)





