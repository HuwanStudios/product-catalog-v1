// Customers
// Customers (all persons shopper)
// properties: customersStore
// methods: add a person as customer to the customerStore, show all customers

//Define customer class
class Customers {
    constructor(customersStore) {
      this.customersStore = customersStore;
    }
  
    addCustomer(person) {
      this.customersStore.push(person);
    }
}