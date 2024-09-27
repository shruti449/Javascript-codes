let x = Math.pow(10, 2)
console.log(x)
x = Math.sqrt(100)
console.log(x)
x = Math.floor(2.1)
console.log(x)
x = Math.ceil(2.1)
console.log(x)

///***************************** */

function sayHello(fname) {
    let msg = `Hello ${fname}`
    return msg
}
let i = sayHello("abc")
console.log(i)

//*********************************

function add(x,y) {
let z=x+y
return z
}
let p=add(100,200)
console.log(p)

//*********************************** */

function area(radius){
    a=3.14*radius*radius
    return a
}
let v=area(1.2)
console.log(v)