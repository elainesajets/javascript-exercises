function findAge(born, death) {
  return !death ? new Date().getFullYear() - born : death - born;
}

const findTheOldest = function (arr) {
  let sorted = arr.sort(
    (a, b) =>
      findAge(b.yearOfBirth, b.yearOfDeath) -
      findAge(a.yearOfBirth, a.yearOfDeath)
  );

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
