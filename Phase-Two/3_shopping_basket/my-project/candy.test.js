const Candy = require("./candy");

describe("Candy", () => {
  it("initalizes an instance of Candy class", () => {
    const candy = new Candy("Kinder Egg", 2.99);
    expect(candy.name).toBe("Kinder Egg");
    expect(candy.price).toBe(2.99);
  });

  it("returns the name of the candy", () => {
    const candy = new Candy("Twix", 2.99);
    expect(candy.getName()).toBe("Twix");
  });

  it("returns the price of the candy", () => {
    const candy = new Candy("Twix", 2.99);
    expect(candy.getPrice()).toBe(2.99);
  });
});
