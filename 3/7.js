function reverse(str) {
  let strLenght = str.length;
  let totalArr = '';
  let j = 0;

  for (let i = strLenght - 1; 0 <= i; i--) {
    totalArr = totalArr + str[i];
    j++
  }

  return totalArr
}

function toSame(str) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, '');
  return str
}

function isPalindrome(str) {
  let toLC = toSame(str);
  let strTest = reverse(toLC);

  if (strTest === toLC) {
    return true
  } else {
    return false
  }

}