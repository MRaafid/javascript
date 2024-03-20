let person = {
    name: "John Doe",
    age: 30,
    gender: "male",
    occupation: "Engineer"
  };
let product = {
    name: "Laptop",
    brand: "Dell",
    price: 999.99,
    inStock: true
  };  
let x = {name: "Raafid"}

let a ={...person} // copy the content of person
console.log(`ORGINAL:`)
console.log(person)
console.log(`COPY:`)
console.log(a)
console.log("")
person.age = 25; //modifying orginal will not change the copy
console.log(`ORGINAL:`)
console.log(person)
console.log(`COPY:`)
console.log(a)
console.log("")
console.log(`Merge:`)
let b ={...person,...product} // will merge person and product
console.log(b)
let c ={...product,...person,...x} // when merging if same two elements are any merging objects last one mentioned in the order will be displayed
console.log(c)