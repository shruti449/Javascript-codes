function check(x) {
    let s1 = x % 2 == 0 ? "even" : "odd"
    console.log(s1)
}

function checkage(age) {
    let s2 = age >= 18 ? "you can vote" : "you can not vote"
    console.log(s2)
}
check(3)
check(6)
checkage(18)
checkage(11)

//nested ternary operator
function max(x, y, z) {
    let a = x > y ? (x > z ? x : z) : (y > z ? y : z)
    console.log("max number is " + a)
}
max(30, 45, 60)