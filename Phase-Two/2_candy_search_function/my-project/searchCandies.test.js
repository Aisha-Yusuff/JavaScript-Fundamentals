const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("it returns candies that start with Ma and have a price lower than 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("it returns candies that start with Ma and their price is lower than 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
});
