function isSorted(arr) {
  let arrLenght = arr.length;

  let boo = false;

  if (arrLenght === 0) {
    boo = true;
  } else {
    for (let i = 0; i < arrLenght - 1; i++) {

      if (arr[i] < arr[i + 1]) {
        boo = true;
      } else {
        boo = false;
        break
      }
    }
  }
  return boo
}

console.log(isSorted([]));                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]));  // true
console.log(isSorted([3, 9, -3, 10]));            // false