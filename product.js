// Product (representing an individual product)
// properties: name, price, currency
// methods: show the name of the products, show the price

// Define the Product class
class Product {
    constructor(name, price, currency) {
      this.name = name;
      this.price = price;
      this.currency = currency;
    }
  
    showName() {
      return `${this.name}`;
    }
  
    showPrice() {
      return `${this.price} ${this.currency}`;
    }
  }