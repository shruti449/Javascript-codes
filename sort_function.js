function msort(x,y){
    if(x==y) return 0;
    if(x>y) return 1;
    if(x<y) return -1
}

let arr=[1,2,15]
console.log(arr)
arr.sort()
console.log(arr)

arr.sort(msort)
console.log(arr)

//******************************** */
//reverse function
let arr1=["this","is","demo","string"]
console.log(arr1)
arr1.reverse()
console.log(arr1)

//join function
arr1.reverse()
let msg=arr1.join(" ")
console.log(msg)