// function even(){
//     console.log("even numbers")
// }
// function odd(){
//     console.log("odd numbers")
// }
// function check(num,fun1,fun2){
//     if(num%2==0){
//         fun1()
//     }
//     else{
//         fun2()
//     }
// }
//check(12,even,odd)



//using arrow function
const even=()=>console.log("even")
const odd=()=>console.log("odd")
function check(num,fun1,fun2){
    if(num%2==0){
        fun1()
    }
    else{
        fun2()
    }
}
check(12,even,odd)


