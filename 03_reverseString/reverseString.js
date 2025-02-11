const reverseString = function (words) {
  let reversedText = '';
  const myString = words.split('');
  reversedText = myString.reverse();

  return reversedText.join('');
};

// Do not edit below this line
module.exports = reverseString;
