function checkPermutation(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let str1Hash = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1Hash[str1[i]] == undefined) {
      str1Hash[str1[i]] = 1;
    } else {
      str1Hash[str1[i]] += 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (str1Hash[str2[j]] == undefined || str1Hash[str2[j]] == 0) {
      return false;
    }

    str1Hash[str2[j]] -= 1;
  }

  return true;
}

console.log(checkPermutation("alicia", "aicila"));
console.log(checkPermutation("coding", "doincg"));
console.log(checkPermutation("abc", "def"));
console.log(checkPermutation("asdlfjk", "as"));
