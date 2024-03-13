let object =    [
                    {
                        name: 'Alice',
                        location: 'New York',
                        gender: 'female',
                        age: 25
                    },
                    {
                        name: 'Bob',
                        location: 'Los Angeles',
                        gender: 'male',
                        age: 30
                    },
                    {
                        name: 'Eve',
                        location: 'Chicago',
                        gender: 'female',
                        age: 35
                    }
                ];
object.forEach(element => {
    console.log(element.name)
});

object.forEach(x => {
    console.log(x.age)
});