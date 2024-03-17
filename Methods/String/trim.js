// removes space at both ends of the strinng

function trim(x)
    {
        y=x.trim()
        console.log (`
                        Original: ${x}
                        Trimmed:  ${y}  
                    `)
    }

trim('apple')
trim(' apple ')