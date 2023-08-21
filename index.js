function fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


console.log("The Fibonacci sequence up to the 10th term is:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
