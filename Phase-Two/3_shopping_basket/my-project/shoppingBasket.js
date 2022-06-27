const Candy = require("./candy");
class ShoppingBasket {
  constructor() {
    this.allItems = [];
  }

  addItem(item) {
    this.allItems = this.allItems.concat(item);
  }

  getTotalPrice() {
    const totalPrice = this.allItems.reduce((total, item) => {
      return total + item;
    }, 0);
    return totalPrice;
  }
}

const basket = new ShoppingBasket();
basket.addItem(new Candy("Fredo", 3.99));
basket.getTotalPrice();

module.exports = ShoppingBasket;
