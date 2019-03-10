function findStr(str, pattern) {
  const arrPi = createPi(pattern);
  
  for(let i = 0, k = 0, lenPat = pattern.length, n = str.length; i < n;) {
    if (str[i] === pattern[k]) {
      i++;
      k++;
      if (k === lenPat) {
        return true;
      }
    } else if (k === 0) {
      i++;
    } else {
      k = arrPi[k - 1];
    }
  }
  
  return false;
}

function createPi(str) {
  const arr = [0];
  for(let i = 1, j = 0, n = str.length; i < n && j < n;) {
    if (str[i] === str[j]) {
      arr[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = arr[j - 1]; 
    } else {
      arr[i] = 0;
      i++;
    }
  }
  
  return arr;
}

console.log(findStr('abcadeabcabcabd', 'abcabd'))

console.log(createPi('abbaabbab'))