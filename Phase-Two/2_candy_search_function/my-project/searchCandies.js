const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

const searchCandies = (name, price) => {
  caseName = name.toLowerCase();

  const filteredPrice = candies
    .filter((candy) => candy.price < price)
    .map((candy) => {
      names = candy.name.toLowerCase();
      return names;
    });
  console.log(filteredPrice);

  const lowercaseName = candies.map((candy) => {
    candy.name = candy.name.toLowerCase();
    return candy.name;
  });
  console.log(lowercaseName);

  const filteredName = lowercaseName
    .filter((candy) => candy.startsWith(caseName))
    .map((candy) => {
      return candy;
    });

  let result = filteredPrice.filter((names) => filteredName.includes(names));

  const searchResult = result.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return searchResult;
};

console.log(searchCandies("S", 4));

module.exports = searchCandies;
