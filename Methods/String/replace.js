// replaces content in string
// eg: string.replace('word to be replaced','new word')

function replace(x)
    {
        a = 'Hello Name!';
        console.log (`
                        Original: ${a}
                        Trimmed:  ${a.replace('Name',x)}  
                    `)
    }

replace('Raafid')