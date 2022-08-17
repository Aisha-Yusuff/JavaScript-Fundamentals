// const Candy = require("./candy");

class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.allItems = [];
  }

  addItem(item) {
    this.allItems = this.allItems.concat(item);
    console.log(this.allItems);
  }

  getTotalPrice() {
    const totalPrice = this.allItems.reduce((total, item) => {
      return total + item.price;
    }, 0);

    // This can also be done with for each instead of reduce
    // let totalPrice = 0;
    // this.allItems.forEach((item) => {
    //   totalPrice += item.price;
    // });
    return totalPrice;
  }
}

const basket = new ShoppingBasket();

basket.addItem(new Candy("chocolate", 5.99));
basket.addItem(new Candy("marshmallows", 1.99));

// console.log(basket);

// console.log(basket.getTotalPrice());
