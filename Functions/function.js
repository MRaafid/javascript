function add (a)
    {
        let x =0;
        for (const i of a) 
            {
                x+=i;
            }
        console.log(`sum=${x}`)
    }

add([1,2,3,4])
add([100,23,24,124,12453,14354.43,434])