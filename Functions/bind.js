// bind is simialar to call and apply
// difference is it will create a new function and the function needs to be called again for the code to work (line: 28, 29)
// we will need to give a variable name if we want to use bind (line: 25, 26)
// for bind it elemets is mentioned similar arrays, but instead of "[ ]" "()" is used
// eg: function.apply(object, [element1, element2])

details= function (city,discount)
    {
        console.log(`${this.name} order a ${this.product} from ${city} for $${this.price} at ${discount}% Off`)
    }

const Item1 =   {   
                    name: "John",
                    product: "Shirt",
                    price: 25.99,
                };

const Item2 =   {
                    name: "Ria",
                    product: "Headphones",
                    price: 49.99,
                };
details.bind(Item1, ('Mangalore',10)) // will not works a it should be give a variable name

a = details.bind(Item1, ('Mangalore',10))
b = details.bind(Item2, ('Mangalore',10)) 

a();
b();
