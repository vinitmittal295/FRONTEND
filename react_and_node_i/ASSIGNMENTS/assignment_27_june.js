const user = {
    _id: "60d0fe4f5311236168a109ca",
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345"
    }
  };

  function printUserDetails({ _id, name, email, age, address: { street, city, state, postalCode } }) {
    console.log("User ID:", _id);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Address:");
    console.log("  Street:", street);
    console.log("  City:", city);
    console.log("  State:", state);
    console.log("  Postal Code:", postalCode);
  }
  
  printUserDetails(user);
  
  