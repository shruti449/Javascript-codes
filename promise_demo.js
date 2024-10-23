// console.log("before")
// setTimeout(()=>console.log("hello"),5000)
// console.log("after")

let p = new Promise((resolve, reject) => {
    //producing code
    //send request to server side code
    
    setTimeout(() => resolve("got data from server"), 4000)
    //setTimeout(()=>reject("got error from server"),4000)

    //either resolved or reject ,only one function at a time
})

p.then((data) => {
    console.log("before getting data")
    console.log(data)
    console.log("in then data consumer")
}, (error) => {
    console.log(error)
    console.log("in then error consumer")
})

// p.catch((error)=>{
//     console.log(error)
//     console.log("in error")
// })