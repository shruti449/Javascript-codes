//normal function
function square(x){
let y=x*x
return y
}
let s=square(12)
console.log(s)

//arrow function

let sqr=(x)=>x*x
let a=sqr(20)
console.log(a)


let sayHello=(fname)=>`Hello ${fname}`
let msg =sayHello("abc")
console.log(msg)

//multi line arrow function
let arr=[10,20,30,40,50,60]
console.log(arr)
arr.push(100)
console.log(arr)
function show(x){
    console.log(x)
}
arr.forEach(show)
arr.forEach((p)=>console.log(p))
arr.forEach((p)=>{
    console.log("hello")
    console.log(p)
})