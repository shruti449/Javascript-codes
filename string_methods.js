let s1 = "Helol World"
console.log(s1)
//toUpperCase()
s1 = s1.toUpperCase()
console.log(s1)
//toLowerCase()
s1 = s1.toLowerCase()
console.log(s1)
//indexOf()
let x = s1.indexOf("l")
console.log(s1)
x = s1.indexOf("xyz")
console.log(s1)
x = s1.indexOf("wo")
console.log(s1)
//lastIndexOf()
x = s1.lastIndexOf("l")
console.log(s1)

let s2 = "hello world"
let i = -1
do {
    i = s2.indexOf("l", i + 1)
    console.log(i)
} while (i != -1)

//split function
let s3 = "this is demo string"
console.log(s3)
s3 = s3.split(" ")
console.log(s3)
let s4 = "abc,100,xyz,200"
s4 = s4.split(",")
console.log(s4)

//substring function
let s5 = "Hello World"
console.log(s5)
s5 = s5.substring(1, 7)
console.log(s5)

//slice function
let s6 = "Hello World"
console.log(s6)
s6 = s6.slice(1, 7)
console.log(s6)
// let p = s6.slice(-1, -4)
// console.log(p)
