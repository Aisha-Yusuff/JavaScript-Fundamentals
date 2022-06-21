// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// refactoring the code above :

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

// parity - the fact of being odd or even

for (let i = 0; i <= 20; i++) {
  const parity = oddOrEven(i);
  console.log(`${i} is ${parity}`);
}
