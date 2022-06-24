console.log("A");

const callbackB = () => {
  console.log("B");
};

const callbackE = () => {
  console.log("E");
};

console.log("C");

// the callback function creates a delay in when the code is presented/executed.
// The sequence of code - the callback enters the line of code the same way it has been written.

setTimeout(callbackE, 100);
setTimeout(callbackB, 0);

for (let i = 0; i <= 1000000; i++) {
  console.log(i + "D");
}

for (let i = 0; i <= 1000000; i++) {
  console.log(i + "F");
}
