const palindromes = function (string) {
  let stringArr = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('');

  let reversed = [...stringArr].reverse();

  return stringArr.join('') === reversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
