const ShoppingBasket = require("./shoppingBasket");
const Candy = require("./candy");

describe("ShoppingBasket", () => {
  it("returns a total basket price of 21.02", () => {
    const basket = new ShoppingBasket();
    let fakeCandy = { name: "Bounty", price: 10.51 };
    basket.addItem(fakeCandy.price);
    basket.addItem(fakeCandy.price);
    expect(basket.getTotalPrice()).toBe(21.02);
  });

  it("returns a total basket price of 21.02", () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 4.99 };
    basket.addItem(candyDouble.getPrice());
    expect(basket.getTotalPrice()).toBe(4.99);
  });
});

// jest --watchAll
