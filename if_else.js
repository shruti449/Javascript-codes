function show(x) {
    if (x % 2 == 0) {
        console.log("EVEN")
    }
    else {
        console.log("ODD")
    }
}
function check(age) {
    if (age >= 18) {
        console.log("you can cast a vote")
    }
    else {
        console.log("you cannot cast a vote")
    }
}

show(12)
show(7)
check(23)
check(17)