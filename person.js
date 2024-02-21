// PERSON
// Person (a person buying a product)
// properties: firstName, lastName, email
// methods: get a person’s full name, get a person’s email

// Define the Person class
class Person {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getEmail() {
      return `${this.email}`;
    }
  }