const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generateMessages = (names) => {
  return names.map((name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
};

console.log(generateMessages(names));
