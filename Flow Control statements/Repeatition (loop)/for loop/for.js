function factorial(x)
    {
        let z=1
        if(x<0)
            { 
                console.log(`INVALID INPUT`)
                console.log(`THE NUBER SHOULD BE A POSITIVE INTEGER`)
            }
        else if(x===0)
            { 
                console.log(`${x}!=1`)
            }
        else
            {
                for(i=1;i=x;i++)
                    {
                        z *=i;
                    }
                console.log(`${x}!=${z}`)
            }
    }

factorial(0) 
factorial(-19)
factorial(5)