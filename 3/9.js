function isBalanced(str) {
  str = str.replace(/[^\{}]/g, '');
  let strLenght = str.length;

  let stapleleft = 0;
  let stapleright = 0;

  for (let i = 0; i < strLenght; i++) {
    if (str[i] === '{') {
      stapleleft++
    } else if (str[i] === '}') {
      stapleright++
    }
  }

  if (stapleleft === stapleright) {
    return true
  } else {
    return false
  }
}
