const convertToCelsius = function (num) {
  let celcius = ((num - 32) * 5) / 9;
  return Math.round(celcius * 10) / 10;

  // alternative:
  // return Math.round((num - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function (num) {
  let fahrenheit = (num * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
