// //create class
// class test{
//     constructor(fname,lname){
//         this.firstname=fname
//         this.lastname=lname
//         console.log("constructor called")
//     }
//     sayhello(){
//         console.log(`hello ${this.firstname}`)
//         console.log(`hello ${this.lastname}`)
//     }
// }

// //create object of class
// let ob1=new test("abc","pqr")
// let ob2=new test("xyz","lmn")
// ob1.sayhello()
// ob2.sayhello()


class test{
       constructor(fname,lname){
            this.firstname=fname
            this.lastname=lname
            console.log("constructor called")
        }
        sayhello(){
            console.log(`hello ${this.firstname}`)
        }
        show(){
            console.log("in show")
        }
    }
    console.log(typeof(test))
console.log(test.prototype.sayhello)
console.log(test.prototype.show)

//******************************** */
function display(myclass2) {
    let ob=new myclass2
    ob.sayhello()
}
let x=class{
    constructor(){
        console.log("constructor called")
    }
    sayhello(){
        console.log("hello world")
    }
}
display(x)

//encapsulation

class Test{
    #firstname;
    constructor(fname){
        this.#firstname=fname
    }
    set Name(fname){
        this.#firstname=fname
    }
    get Name(){
        return this.#firstname
    }
}

let ob=new Test("abc")
console.log(`hello ${ob.Name}`)
ob.Name="xyz"
console.log(`hello ${ob.Name}`)
//can not access private variable outside of the class
//console.log(`helllo ${ob.#firstname}`)
