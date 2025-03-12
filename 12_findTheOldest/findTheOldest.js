const findAge = function (born, death) {
  return !death ? new Date().getFullYear() - born : death - born;
};

const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) => {
    let oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = findAge(current.yearOfBirth, current.yearOfDeath);

    return oldestAge > currentAge ? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
