const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`;
}

console.log(ageCalculator('Bob',1984,2020));