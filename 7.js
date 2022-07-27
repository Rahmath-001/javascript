// var a=5,b=-3,c=-6;

// console.log(c!=a)

// // logical equality - values
// console.log(0==1) //f
// console.log(100==10) //f
// console.log(0.0==0) //t
// console.log('0'=='zero') //f
// console.log(0==0) //t
// console.log(0==0.0) //f
// console.log('0'=='o') //f
// console.log('oil'=='oil')
// console.log('false'==false)
// console.log(false==0)
// console.log(true==1)
// console.log(true==10)

// // strict equality - values+types
// console.log(00===0) //
// console.log(0.0===0)
// console.log(0===false)
// console.log('zero'===0)
// console.log('0'==='0')
// console.log(true===1)




// logical Operators

// true - success -pass - active
// true -1 -values


// false - fail - inactive
// false - 0 - empty


// logical AND - && (find first false)
// a b r
// f1  f2  f1
// f  t  f
// t  f  f
// t1  t2  t2


// console.log(3 && 4) // 4
// console.log(10 && 0) // 0
// console.log(0 && '') // 0
// console.log(false && 4) // false
// console.log(false && 0.0) // false
// console.log('0' && '0') // '0'
// console.log('false' && 'false1') // false1
// console.log('0' && '0.0' && false && 0.0) // false

// console.log('true' && 'false' && true && 1 && 0.1) // 0.1
// console.log('0' && 'zero' && 0 && '0' && 0.0) // 0



// logical OR - || - find first true
// a  b  r 
// f1 f2 f2
// f  t  t 
// t  f  t
// t1 t2 t1

// console.log('90' || "0" || '' || 0) // 90
// console.log('' || " " || 'false' || 0.0) 
// console.log('' || "" || 'false' || 0.0) 
// console.log('' || "" || ' ' || '  ' || '   ')
// console.log('0.1' && '' || 0.0 && ('') && {} || '0.0' && 'O' || [] )
// // first deal with && as it has precedense
// console.log()



// logical NOT - !

// console.log(!'false') // f
// console.log(!0.0) // t
// console.log(! [0]) // f




//  BITWISE OPERATOR

// increment/decrement - post, pre
// pre incerement 

// var a=4
// a = a+1
// a+=1
// ++a
// console.log(++a)
// console.log(a)
// console.log(++a +a + ++a)
// console.log(a + ++a + ++a)
// console.log(a)


// pre decrement
// var a=5

// console.log(--a)
// console.log(a)
// console.log(--a +a + --a)
// console.log(a + --a + --a)
// console.log(a)


// var a=10

// console.log(--a)
// console.log(a)
// console.log(++a)
// console.log(--a - --a + --a +a + ++a + --a)
// console.log(a - ++a - --a + --a + a)
// console.log(a)






// post increment
// var a=10
// a++
// console.log(a++) // 10
// console.log(a) // 11
// console.log(a++ +a + a++) // 35
// console.log(a + a++ + a++) // 40 
// console.log(a) //14



// post decrement 
// var a=12
// a++
// console.log(a--) // 12(11)
// console.log(a) // 11
// console.log(a +a-- + a--) // 11 + 11(10) + 10(9) = 32
// console.log(a-- + a + a--) // 9(8) + 8 +  8(7) = 25
// console.log(a-- - a) // 7(6) - 6 = 1
// console.log(a) // 6



// var a=13,b=15
// // a++
// console.log(a--) // 13(12)
// console.log(b--)// 15(14)
// console.log(a + b-- + a-- -b--) // 12 +14(13)+12 (11) - 13(12)=25   , a=11,b=12
// console.log(a-- + b + b-- + a--) // 11(10) +12 +12(11) +10(9) =45    , a=9,b=12
// console.log(a-- - b) // 9(8) -11 = -2
// console.log(a,b) // 8,11


// var a=20,b=22
// console.log(a,b) // 20 , 22
// console.log(++a,b++,a++,b++) // 21, 23, 21(22), 23(24)  ,   a=22,b=24
// console.log(++a + b-- + ++a -b++) // (22)23 + 24(23) + 24 -23 (24) = 48   , a=24,b=24 
// console.log(a-- + b+ ++a +b-- + a--) // 24 (23) + 24 +24 +24(23) +24(23) = 120   , a=23,b=23
// console.log(a-- - b+ a++ -b--) // 23 (22) - 23 +22(23) -23(22) = -1  , a=23,b=22
// console.log(a,b) //23,22










// Bitwise Operators
// Bitwise AND - &
// Bitwise OR - |
// Bitwise NOT - ~
// Bitwise XOR - ^



// Bitwise AND - &
// a  b  r
// 0  0  0
// 0  1  0
// 1  0  0
// 1  1  1

// var a=7,b=5;
// // 7 = 0111
// // 5 = 0101
// // -----------
// //     0101  = 5



// var a=40,b=25;
// 40 = 
// 25 = 
// -----------
//      00001 =  1

// console.log(a&b)






// Bitwise OR - |
// a  b  r
// 0  0  0
// 0  1  0
// 1  0  0
// 1  1  1


// var a=33,b=27;
// //  33 = 
// //  27 =
// console.log(a|b)


// var a=53,b=26;
// //  53 = 
// //  26 =
// console.log(a|b)

// var a=73,b=45;
// //  33 = 
// //  27 =
// console.log(a|b)


// // Bitwise XOR - ^
// // a  b  r
// // 0  0  0
// // 0  1  0
// // 1  0  0
// // 1  1  1

// var a=37,b=2;
// //  33 = 
// //  27 =

// // left shift (<<)
// console.log(a<<b)


// var a=17,b=4;


// // Right Shift 

// var a=117, b=3
// console.log(a>>b) 









// // Bitwise NOT - ~
// // ~N= -(N+1)]

// console.log(~7)








