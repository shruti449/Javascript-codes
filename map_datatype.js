//create new map object
let ob=new Map()
console.log(ob)

//set items in map object
ob.set("id",100)
ob.set("name","abc")
ob.set("address","xyz")
console.log(ob)

//get value from the map object
console.log(ob.get("name"))
let x=ob.get("address")
console.log(x)

//check the items are persent in the map or not
console.log(ob.has("name"))

//check the size of map
let y=ob.size
console.log(`the size of map is ${y}`)

//delete specific item from the map
ob.delete("address")
console.log(ob)
