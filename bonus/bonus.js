// 1. Accept only numbers, Make a number always positive though given negative? With & without builtin function?

// var a="3";

// if (+a<0){
//     console.log(Math.abs(a))
// }
// else if(+a>0) {
//     console.log(a)
// }
// else {
//     console.log('input is a string')
// }







// 2. A shop will give discount of 10% only if you purchase more than 1000 rupees.
// Any item costs exactly 100 rupees. inputs = quantity of items.
// Result must be Final bill prize.




// var a=100,b=10,total;
// var total= (a*b);

// if (total>1000){
// var discount = total*10/100;
// var totalprice=(total - discount)
// console.log(`\n item price = ${a}\n items =  ${b}\n discount = ${discount}`)
// console.log(` totalprice = ${totalprice}\n`)
// }
// else {
//     console.log(`no disscount,  total ${total}`)
// }










// 3.check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?
// i) if directly lengths are given,
// ii) Take coordinates as input.


// var a=10, b=10 , c=90;

// if (a == b && b == c){
// console.log("Equilateral Triangle");        //Since all the sides of the given triangle are equal.
//   }
// else if (a == b || b == c || c == a){
//   console.log("Isosceles Triangle");        //Since two sides are equal its a Isosceles Triangle
// }
// else{
//   console.log("Scalene Triangle");      //Since all the sides of the given triangle are unequal, the triangle is scalene.
// }








// 4.Build Mini calculator having functionalities - *, /, +, - , %, squareroot, exponentiation, floor, ceil

// var a= 4, b= 5, c, operator= "hi";

// if (operator=="+"){
//     c=a+b;
//     console.log(c)
// }
// else if (operator=="-"){
//     c=a-b;
//     console.log(c)
// }
// else if (operator=="*"){
//     c=a*b;
//     console.log(c)
// }
// else if (operator=="/"){
//     c=a/b;
//     console.log(c)
// }
// else if (operator=="%"){
//     c=a%b;
//     console.log(c)
// }
// else if (operator=="squareroot"){
//     console.log(Math.sqrt(a+b))
// }
// else if (operator=="exponential"){
//     console.log((a)**b)
// }
// else if (operator=="floor"){
//     console.log(Math.floor(a),Math.floor(b))
// }
// else if (operator=="ceil"){
//     console.log(Math.ceil(a),Math.ceil(b))
// }
// else{
//     console.log('invalid operator/choise')
// }











// 5.roots of quadratic equation, nature of roots 
// var a=1,b=-3,c=10;

// check=(b*b)-4*a*c 

// root1 = (-b-(Math.sqrt(check))/2*a)
// root2 = (-b+(Math.sqrt(check)))/2*a



// if (check>0){
//     console.log(`roots are real and unequal `)
//     console.log(`root 1 = ${root1}  ,    root 2 = ${root2}  `)
// }
// else if (check==0){
//     console.log(`roots are real and equal `)
//     root1 = root2 = -b / (2*a);
//     console.log(`root 1 = ${root1}  ,    root 2 = ${root2}  `)
// }
// else if (check!==0){
//     console.log(`roots are imaginary `)
//     var img; 
//     img = Math.sqrt((-check)/2*a)
//     console.log(`${img} `)
// }

// else{
//     console.log(`invalid inputs`)
// }