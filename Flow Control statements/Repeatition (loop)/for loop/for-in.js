function title(x)
    {
        for (const key in x) 
            {
                const element = x[key];
                console.log(`${key}`)
            }
        console.log("")
    }

function prop(x)
    {
        for (const key in a) 
        {
            const element = a[key];
            console.log(`${element}`)
        }
        console.log("") 
    }

let a =    {
                    name: 'John',
                    age: 30,
                    gender: 'male'
                };
  
title(a)
prop(a)