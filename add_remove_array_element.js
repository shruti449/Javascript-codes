let arr = [10, 20]
console.log(arr)

//push function
arr.push(30)
arr.push(40)
console.log(arr)

//unshift function
arr.unshift(90)
arr.unshift(100)
console.log(arr)

//pop function
arr.pop()
console.log(arr)

//shift function
arr.shift()
console.log(arr)

//slice
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let arr2 = arr1.slice(-7, -1)
console.log(arr1)
console.log(arr2)

//concat array
let a = [10, 20]
let a1 = [90, 80]
console.log(a)
console.log(a1)
let a2 = a.concat(a1)
console.log(a2)
let a3 = a.concat([2, 3], [5, 6, 7], a1, a2)
console.log(a3)