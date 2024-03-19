//turns array into string
let a = [1,2,3,4]
let b=a.join(",") // default
let c=a.join() // here it will take the default
let d=a.join(2) // here 2 is taken as a sperator as a result 2 is added after ever element
let e=a.join("") // there will be no seperator and elements will be combined
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
