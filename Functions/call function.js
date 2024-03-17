// call and apply are same only the typing formt is differnt
// for call it is seperated by commas
// eg: function.call(object, element1, element2)

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

details.call(Item1,'Mangalore',10) 
details.call(Item2,'Mangalore',10) 
// mangalore and 10 will be input from the function and call is used to pick the item trom the object (here Item1 or Item2)
