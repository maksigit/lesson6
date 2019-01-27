function reverse(str) {
  let strLength = str.length;
  let totalArr = '';
  let j = 0;

  for (let i = strLength - 1; 0 <= i; i--) {
    totalArr = totalArr + str[i];
    j++
  }

  return totalArr
}
