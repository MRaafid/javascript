let today = new Date();
const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
let f = today.toLocaleString("en-us", options);
console.log(f);

//GERMAN
{
    let today = new Date();
    const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let f = today.toLocaleString("de-DE", options);
    console.log(f);
}

/*
    here:
        en, de, :- LANGUAGE
        DE, us :- country format
        options: descri=ve how u want the output
            1. long: full form
            2. short: in short form
            3. numeric: in numbers
*/
