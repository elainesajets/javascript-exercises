const repeatString = function (string, num) {
  let sentence = '';
  if (num < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < num; i++) {
    sentence += string;
  }

  return sentence;
};

// Do not edit below this line
module.exports = repeatString;
