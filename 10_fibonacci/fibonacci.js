const fibonacci = function fibonacci(num) {
  let n = parseInt(num);

  if (n === 1) return 1;
  if (n === 0) return 0;
  if (n < 0) return 'OOPS';

  let prev = 0;
  let curr = 1;

  for (let i = 1; i <= n - 1; i++) {
    let temp = prev + curr;
    prev = curr;
    curr = temp;
  }

  return curr;

  //for loop can be replaced by recursive function:
  //return fibonacci(n - 1) + fibonacci(n - 2);
  //however this is not recommended due to it being too slow for large num
};
// Do not edit below this line
module.exports = fibonacci;
