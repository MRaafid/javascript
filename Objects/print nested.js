employee = {
    id: 1234,
    name: "John Doe",
    department: "Engineering",
    contact: {
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipcode: "12345"
      }
    },
    projects: ["Project A", "Project B", "Project C"]
  };
  
  console.log(employee);
  console.log(employee.contact.address.state);