// CATALOG
// Catalog (representing a store of several products)
// properties: productStore
// methods: add a product

// Define the Catalog class
class Catalog {
    constructor(productStore) {
      this.productStore = productStore;
    }
  
    addProduct(product) {
      this.productStore.push(product);
    }
  }