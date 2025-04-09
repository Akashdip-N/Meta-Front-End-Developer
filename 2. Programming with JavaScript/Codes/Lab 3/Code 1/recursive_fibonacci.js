function fib(n) {
  if (n == 0 || n == 1) return n;

  return fib(n - 1) + fib(n - 2);
}

// Test the function
console.log(fib(0)); // Output: 0
console.log(fib(1)); // Output: 1
console.log(fib(2)); // Output: 1
console.log(fib(3)); // Output: 2
console.log(fib(4)); // Output: 3
console.log(fib(5)); // Output: 5
console.log(fib(6)); // Output: 8
console.log(fib(7)); // Output: 13
