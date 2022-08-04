//  ARRAY HELPERS


// Arrow functions
// hello = function(){
//     return "Hello World !!!";
// }
// console.log(hello())



// hello = () => {return "hello world"}

// console.log(hello())



// -----------------------------------------------------------------------------------------------------------------

//  FOR IN

// a=[2,5,1,6,8]

// for (i in a) {
//     console.log(a[i])
//     // code block to be executed
// }


// for (key in a) {
//     console.log(key)
//     // code block to be executed
// }




// ---------------------------------------------------------------------------------------------------------------------------------




// FOR OF

// a=[2,5,1,6,8]

// for(variable of iterable){
    // code to be executed
// }

// for (i of a){
//     console.log(i)
// }





// n = 'code'
// function cases(a){
//     for(i of a){
//     return a.toUpperCase()
//     }
// }

// console.log(cases(a))


// a=['code','unique','different']

// function cases(a){
//     for(i in a){
//     a[i]=a[i].toUpperCase()
//     }
//     return a
// }

// console.log(cases(a))





// a=['code','unique','different']
// for(i in a){
//     // a=''
//     // console.log(i.toUpperCase())
//     a[i]=a[i].toUpperCase()
//     // console.log(a)
//     // a=''
// }

// console.log(a)




// ---------------------------------------------------------------------------------------------------------------------------------



//  FOR EACH


// a=['code','unique','different']

// a.array.forEach(i => {
//     console.log(i.toUpperCase)
// });





// ---------------------------------------------------------------------------------------------------------------------------------



//  MAP()

// a=['code','unique','different']
// a=a.map(ele => ele.toUpperCase())
// console.log(a)




// ---------------------------------------------------------------------------------------------------------------------------------


//  THIS


// const person = {
//     fisrtname : "Rahmathullah",
//     lastname  : "Qaaemuddin",
//     id        :  77233,
//     fullname : function(){
//         return this.fisrtname + " " + this.lastname
//     }
// }

// console.log(person.fullname())
