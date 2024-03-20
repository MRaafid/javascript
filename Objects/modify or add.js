let person = {
    name: "John",
    age: 30,
    gender: "male",
    occupation: "engineer",
    city: "New York",
    hobbies: ["reading", "cooking", "running"],
    isMarried: true,
    education: "Bachelor's degree",
    salary: 70000,
    nationality: "American"
  };
console.log(`ORIGINAL:`);
console.log(person);
person.name='Sachin' // will modify name
console.log(`NAME:`);
console.log(person);
person.company = 'PAFGC' // IF THE MENTIONED PROPETY IN NOT IN THE OBJECT IT WILL ADD THE PROVERTY AT THE END
console.log(`ADD:`);
console.log(person);