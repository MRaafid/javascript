// here loop is excuted once even if the condition is false
function sum(x)
    {
        let i=0;
        let z=0;
            do 
                {
                    z+=i;
                    i++ 
                }  
            while (i<=x)
        console.log(`SUM OF NUMBERS FROM 0 TO ${x} IS ${z}`)
    }
sum(1)
sum(5)
sum(0)