
let arr=[10,20,30,40,50]
console.log(arr)
let obj={id:100,name:"abc",address:"xyz"}
console.log(obj)
let m1=new Map()
m1.set("id",100)
m1.set("name","abc")
m1.set("address","xyz")
console.log(m1)

console.log("***********for in demo************")
for (const k in arr) {
    console.log(k)
}
for (const k in obj) {
    console.log(k)
}
console.log("***********for of demo************")
for (const v of arr) {
    console.log(v)    
}

console.log("********")

for (const v of m1) {
    console.log(v)    
}


