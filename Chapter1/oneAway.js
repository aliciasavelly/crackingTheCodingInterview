/*

One Away: There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character. Given two
strings, write a function to check if they are one edit (or zero edits) away.

*/

function oneAway(str1, str2) {
  if (str2.length < str1.length - 1 || str2.length > str1.length + 1) {
    return false;
  } else if (str2 === str1) {
    return true;
  }

  let i = 0;
  let j = 0;
  while (i < str1.length || j < str2.length) {
    if (str1[i] != str2[j]) {
      if (str1.length > str2.length) {
        j--;
      } else if (str1.length < str2.length) {
        i--;
      }
      return str1.slice(i + 1, str1.length) === str2.slice(j + 1, str2.length);
    }
    
    i++;
    j++;
  }

  return true;
}

console.log(oneAway("pale", "ple") === true);
console.log(oneAway("pales", "pale") === true);
console.log(oneAway("pale", "bale") === true);
console.log(oneAway("pale", "bake") === false);
console.log(oneAway("pale", "paleos") === false);
console.log(oneAway("pale", "pale") === true);
