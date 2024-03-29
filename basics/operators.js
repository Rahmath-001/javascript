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









// ---------------------------------------------------------------------------------------------------------------------------------





//   SPERAD operator 

const arr=["apple", "pineapple", "appricot"];
const obj={...arr};
// console.log(obj);



const array=[1,2,3,4,5,...arr,6,5,8];
const array2={...arr,...array};
// console.log(array2);



let object={
    "name":"rahmathullah",
    "age": 20,
    'gender': "male"
}

let obj2={
    "education":"CSE",
    "expertise":"Robotics software engineer"
}

let obj3={...object,...obj2}
// console.log(obj3)
console.log({...obj2,...array})
