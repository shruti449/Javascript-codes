let arr=[10,20,30,40,50]
console.log(arr[0])
console.log(arr[4])
console.log(arr.at(3))
console.log(arr.at(2))
console.log(arr.at(-4))

// function show(x){
//     console.log(x)
// }
// arr.forEach(show)

//arr.forEach((x)=>console.log(x))
let arr2=arr.map((p)=>{
    let z=2*p
    return z

})
console.log(arr2)