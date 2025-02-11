const sumAll = function (x, y) {
  let sum = 0;
  let start = Math.min(x, y);
  let end = Math.max(x, y);
  const numbers = [];

  function isValid(num) {
    if (isNaN(num) || !Number.isInteger(num) || num < 0) {
      return false;
    }
    return true;
  }

  if (!isValid(x) || !isValid(y)) {
    return 'ERROR';
  }

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  numbers.forEach((num) => (sum += num));

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
