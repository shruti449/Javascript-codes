//static variable
console.log(`*****static variable demo*****`)
class student{
    #id
    static i=0
    constructor(sid){
        this.#id=sid
        student.i++
    }
    show(){
        console.log(`ID: ${this.#id}`)
        console.log(`count is: ${student.i}`)
    }
}
let s1= new student(10)
let s2= new student(20)
let s3= new student(30)
s1.show()
s2.show()
s3.show()


//instance variable
console.log(`*******instance variable demo*******`)
class test{
    #firstname
    #lastname
    constructor(fname,lname){
        this.#firstname=fname
        this.#lastname=lname

    }
    disp(){
        console.log(`firstname is ${this.#firstname}`)
        console.log(`lastname is ${this.#lastname}`)
    }
}
let ob1=new test("abc","xyz")
let ob2=new test("pqr","lmn")
ob1.disp()
ob2.disp()
