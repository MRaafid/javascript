// here start index element will be included in the output but end index element will not 

function slice(array, startIndex, endIndex)
    {
        let x = array.slice(startIndex, endIndex)
        console.log(x)
    }

a=[1,2,3,4,13,1412,343,131242]
slice(a,2,6)
slice(a,"",6) // if start index is not given it will take the start index as 0