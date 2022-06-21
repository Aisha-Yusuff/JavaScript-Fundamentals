let counter = 0;

const increment = () => {
  console.log(counter);
  counter++;

  if (counter === 11) {
    clearInterval(counting);
  }
};

// the if statement here is what we use to break the interval

const counting = setInterval(increment, 1000);
