let arr=["abc","xyz","pqr"]
console.log(arr)
let fname=arr[0]
let lname=arr[1]
console.log(fname)
console.log(lname)

//***************destructuring array*************** */

console.log("*******************")
let [a,b]=arr
console.log(a)
console.log(b)
console.log("*******************")
let [a1,,b1]=arr
console.log(a1)
console.log(b1)

//*************rest operator example************ */
let arr1=[10,20,30,40,50,60,70,80,90]
let [x,y,...arr2]=arr1
console.log(x)
console.log(y)
console.log(arr2)

//***************destructuring object************* */
let obj={id:100,name:"abc",marks:90}
let p=obj.id
let q=obj.name
let r=obj.marks
console.log(obj)
console.log(p)
console.log(q)
console.log(r)

//********** */
console.log("*********destructuring object**********")
//let{id,name,marks}=obj
//let{name,marks,id}=obj
let{id:l,name:m,marks:n}=obj
console.log(l)
console.log(m)
console.log(n)

//*********destructuring with function**********
console.log("*********destructuring with function**********")
function show([x,y,...arr4]) {
    console.log(x)
    console.log(y)
    console.log(arr4)
}
let arr3=[10,20,30,40,50,60,70,80,90]
show(arr3)

function disp({fname,id}) {
    console.log(fname)
    console.log(id)
}

let ob={id:100,fname:"abc",marks:90}
disp(ob)