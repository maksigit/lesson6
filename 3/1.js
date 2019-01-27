function isPrime(num) {
  if (num === 2) {
    return true
  } else if (num !== 1 && num % 2 === 1) {
    return true
  } else {
    return false
  }
}