function isPrime(num) {
  if (num === 2) {
    return true
  } else if (num !== 1 && num % 2 === 1) {
    return true
  } else {
    return false
  }
}

console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false