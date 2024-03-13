//used to Iterate over arrays and strings
function value(a)
    {
        for (let x of a)
            {
                console.log(x);
            }
        console.log("")
    }

value([1,2,3,4]);
value('hello');
value(['Ape','Bat', 'Cat']);
