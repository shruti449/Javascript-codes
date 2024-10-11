let mix1={
    show(){
        console.log("in mix1")
    }
}
let mix2={
    disp(){
        console.log("in mix2")
    }
}

class A{
    constructor(){
        console.log("constructor called!!")
    }
    sayHello(){
        console.log("in A")
    }
}
console.log(typeof(A))
console.log(A.prototype.sayHelllo)
Object.assign(A.prototype,mix1)
Object.assign(A.prototype,mix2)
let ob=new A()
ob.sayHello()
ob.show()
ob.disp()


//computed name

// class B{
//     ['say'+'hello'](){
//         console.log("hello world")
//     }
// }
// let obj=new B()
// obj.sayhello()