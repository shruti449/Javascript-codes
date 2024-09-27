//we can access string by using two ways:1)subscript 2)at()

/********BY SUBSCRIPT****** */
let s1="Hello World"
//length of string
let n=s1.length
console.log(n)
//access string element by index
console.log(s1[2])
console.log(s1[9])
console.log(s1[7])
console.log(s1[-1]) 
//it doesn't support negative indexing

//***********BY AT FUNCTION************ */
console.log(s1.at(4))
console.log(s1.at(0))
console.log(s1.at(-5))
console.log(s1.at(-1))
