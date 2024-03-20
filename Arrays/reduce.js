function math(x) 
    {
        let a = x.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // shoud not change (accumulator, currentValue)
        console.log(a)
        let b = x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        console.log(b)
    }
g=[1,2,3,4,5]
math(g)