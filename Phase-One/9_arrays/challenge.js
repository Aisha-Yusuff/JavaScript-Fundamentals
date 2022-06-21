// const newArray = array.concat(number);

// console.log(newArray);

// const addToBatch = (array, number) => {
//   console.log;
// };

// challenge solution
let array = [1, 2, 3];

let number = 5;

const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
};

console.log(addToBatch(array, number));

// array.concat(number);

// const addArray = (array) => {
//   array.concat(number);
// };

// console.log(addArray(array));

// const addToBatch = (arrayFunction, number) => {
//   console.log(array);
// };

// console.log(addToBatch(addArray, number));
