//used insied a object
const emp = {
    name: 'Alice',
    location: 'New York',
    gender: 'female',
    age: 25,
    intro: function() {
        console.log(`${this.name} is a ${this.age}, ${this.gender} from ${this.location}`)
    }
};
s
emp.intro();
