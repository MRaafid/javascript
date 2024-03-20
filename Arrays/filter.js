function even(x) 
    {
        evenNumbers = x.filter(x => x % 2 === 0);
        console.log(`EVEN NUMBERS`)
        console.log(evenNumbers)
        console.log("")
    }
function odd(x) 
    {
        oddNumbers = x.filter(x => x % 2 !== 0);
        console.log(`ODD NUMBERS:`)
        console.log(oddNumbers)
        console.log("")
    }
a = [1,2,3,4,5,6,7,8,9,0,11,23,14,45,645,22]
even(a)
odd(a)