function missing(arr) {
  let arrSort = arr.sort();
  console.log(arrSort);
  let arrLength = arr.length;
  let shortage = undefined;

  for (let i = 0; i < arrLength - 1; i++) {
    let current = arrSort[i];
    if (arrSort[0] === 2) {
      shortage = 1;
    } else if ((arrSort[i + 1] - current) > 1) {
      shortage = current + 1
    }
  }
  return shortage
}
