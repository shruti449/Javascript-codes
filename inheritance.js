class A{
    constructor(){
        
        console.log("in A")
    }
    
}
class B extends A{
    constructor(){
        super()
        console.log("in B")
    }
    
}
class C extends B{
    constructor(){
        super()
        console.log("in C")
    }
    
}
let ob=new C()


class Abc{
    constructor(){
        this.i=100
        console.log("in A")
    }
}
class Bee extends Abc{
    constructor(){
        super()
        this.j=200
        console.log("in B")
    }
    add(){
        console.log(this.i+this.j)
    }
}
let ob1=new Bee()
ob1.add()