let obj={id:100,name:"abc",age:23}
console.log(obj.id)
console.log(obj.name)
console.log(obj.age)

let emp={id:2,salary:7000}
console.log(emp.id)
console.log(emp.salary)

//*************************************** */
// let arr=[
//     {id:100,name:"abc",age:23},
//     {id:200,name:"xyz",age:5},
//     {id:300,name:"pqr",age:20},
//     {id:300,name:"pqr",age:16}
// ]
// let arr1=arr.filter((p)=>p.age>=18)
// console.log(arr1)

///***************************** */
//find and findIndex function
let arr=[
    {id:100,name:"abc",age:23},
    {id:200,name:"xyz",age:5},
    {id:300,name:"pqr",age:20},
    {id:300,name:"pqr",age:16}
]
//find function
let arr1=arr.find((p)=>p.id==300)
console.log(arr1)
arr1=arr.find((p)=>p.id==600)
console.log(arr1)
//findIndex function
let index=arr.findIndex((p)=>p.id==300)
console.log(index)
