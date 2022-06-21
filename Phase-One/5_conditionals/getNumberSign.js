const getNumberSign = (number) => {
  // if number is positive, return positive
  // if numnber is negative, return negative
  // if zero, return zero
  if (number === 0) {
    return "zero";
  } else if (number > 0) {
    return "positive";
  } else {
    return "negative";
  }
};

const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
};

module.exports = getNumberSign;

module.exports = isValidLength;
