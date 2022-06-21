const phoneNumbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd",
];

const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
};

console.log(checkLength("aaaaaaaabbbbbbbcccccdddddddd"));

const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength);
};

console.log(
  filterLongNumbers(["4763687363", "7867867862", "78678678625667890"])
);
