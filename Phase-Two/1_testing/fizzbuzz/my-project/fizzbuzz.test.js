const fizzBuzz = require("./fizzbuzz");

describe(fizzBuzz, () => {
  it("returns fizz for 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("returns buzz for 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("returns the number", () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it("returns fizzbuzz for 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns fizz for 18", () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });

  it("returns buzz for 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});
