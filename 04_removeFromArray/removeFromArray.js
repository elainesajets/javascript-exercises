/* const removeFromArray = function (array, num) {
  const spliced = array.toSpliced(num - 1, 1);
  return spliced;
}; */

const removeFromArray = function (array, ...args) {
  let myArray = array;

  for (let arg of args) {
    let i = myArray.indexOf(arg);

    while (i !== -1) {
      if (typeof myArray[i] === typeof arg) {
        myArray.splice(i, 1);
      }
      i = myArray.indexOf(arg);
    }
  }

  return myArray;
};
// Do not edit below this line
module.exports = removeFromArray;
