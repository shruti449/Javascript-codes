//create set object
let arr=[10,20,30,10]
let s1=new Set(arr)
console.log(s1)

//add value to the set
s1.add(90)
s1.add(80)
console.log(s1)

//check specific value present or not
console.log(s1.has(20))
console.log(s1.has(120))
if(s1.has(20)){
    console.log(`value present`)
}else{
    console.log(`value not present`)
}

//delete specific value
console.log(s1)
s1.delete(30)
console.log(s1)

//check size of set object
let n=s1.size
console.log(n)

//clear all elements from set
s1.clear()
console.log(s1)
