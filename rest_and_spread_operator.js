let x=Math.max(5,7,30,20,90)
console.log(x)

let arr1=[3,90,2]
x=Math.max(...arr1)
console.log(x)

let arr2=[13,190,2]
x=Math.max(...arr1,...arr2)
console.log(x)

let ar1=[1,2,3]
let ar2=[4,5,6]
let p=100
let q=200

let arr3=[p,q,...ar1,...ar2]
console.log(arr3)

//copy of object

let obj1={id:100,fname:"abc"}
let obj2={...obj1}
obj2.id=200
console.log(obj1)
console.log(obj2)