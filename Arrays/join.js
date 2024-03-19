// will not split the elemts of the string
let s='hello'
let r='hello,raafid,muhammad'
let t='a1be1f13'
let a = s.split(",") 
let b = s.split(",",2)
console.log(a)
console.log(b)
let c = r.split(",") // converts the elemets seperated by comma to different index element in array 
let d = r.split(",",2) // will ristrict to 2 element
console.log(c)
console.log(d)
let e = t.split("1") // here 1 is treated as seperator
console.log(e) 