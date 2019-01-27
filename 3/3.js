function getArrFibonachi(quantity) {
  let fibArr = [0, 1];
  for (let i = 0; i < quantity; i++) {
    fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
  }
  return fibArr[quantity];
}