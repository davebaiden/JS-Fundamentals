function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const input = Number(process.argv[2]);
console.log(factorial(isNaN(input) ? 0 : input));