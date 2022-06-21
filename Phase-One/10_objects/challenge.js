const cohort = {
  name: "May2022",
  id: 1234,
  students: ["Aisha", "Ben", "Sam", "Jay"],
};

const print = (cohort) => {
  console.log(
    cohort.id +
      " - " +
      cohort.name +
      " - " +
      cohort.students.length +
      " students in this cohort"
  );
};

console.log(print(cohort));
