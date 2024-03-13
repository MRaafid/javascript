// IF CHARACTERS IS USE IN CASE IT SHOULD BE IN QUOTES

function grade(a)
{
    switch (a)
        {
            case 'P':
                console.log("Score is more than 35")
                console.log("")
            break;
            case 'F':
                console.log("Score is less than 35")
                console.log("")
            break;
            default:
                console.log("INVALID SELECTION")
                console.log("Option should be 'P' or 'F'")
                console.log("")
        }
}
grade('P');
grade('F');
grade('p');
grade('f');
grade(1);
