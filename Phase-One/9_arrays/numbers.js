const numbers = [1, 2, 3, 4, 5];

//
numbers.forEach((n) => {
  console.log(n);
});

// find the sum of the array with reduce

console.log(numbers.reduce((a, b) => a + b));

// find the sum of the array with for each
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log(sum);
