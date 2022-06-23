const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns candies that start with ma and have a price lower than 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
