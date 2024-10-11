// class A {
//     constructor(x) {
//         this.i = x
//     }
// }
// class B {
//     constructor(a, b) {mixing.js
//         super(a)
//         this.j = b
//     }
//     add() {
//         console.log(this.i + this.j)
//     }
// }
// let ob = new B(100, 200)
// ob.add()

//oberriding

class alpha {
    sayhello() {
        console.log("in A")
    }
}
class Beta extends alpha {
    sayhello() {
        console.log("in B")
    }
}
let ob2 = new Beta()
ob2.sayhello()