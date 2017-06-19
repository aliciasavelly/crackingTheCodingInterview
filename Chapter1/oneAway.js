function oneAway(str1, str2) {
  if (str2.length < str1.length - 1 || str2.length > str1.length + 1) {
    return false;
  } else if (str2 === str1) {
    return true;
  }

  let edit = false;
  let i = 0;
  let j = 0;
  while (i < str1.length || j < str2.length) {
    if (str1[i] != str2[j] && edit == true) {
      return false;
    } else if (str1[i] != str2[j]) {
      edit = true;
      if (str1.length > str2.length) {
        i++;
      } else if (str1.length < str2.length) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
}

console.log(oneAway("pale", "ple") === true);
console.log(oneAway("pales", "pale") === true);
console.log(oneAway("pale", "bale") === true);
console.log(oneAway("pale", "bake") === false);
console.log(oneAway("pale", "paleos") === false);
console.log(oneAway("pale", "pale") === true);
