/*

Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

*/


// function checkPermutation(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }
//
//   let str1Hash = {};
//
//   for (let i = 0; i < str1.length; i++) {
//     if (str1Hash[str1[i]] == undefined) {
//       str1Hash[str1[i]] = 1;
//     } else {
//       str1Hash[str1[i]] += 1;
//     }
//   }
//
//   for (let j = 0; j < str2.length; j++) {
//     if (str1Hash[str2[j]] == undefined || str1Hash[str2[j]] == 0) {
//       return false;
//     }
//
//     str1Hash[str2[j]] -= 1;
//   }
//
//   return true;
// }

function checkPermutation(str1, str2) {
  return sort(str1) == sort(str2);
}

function sort(string) {
  stringArr = string.split("");
  stringArr.sort();
  return stringArr.join("");
}

console.log(checkPermutation("alicia", "aicila"));
console.log(checkPermutation("coding", "doincg"));
console.log(checkPermutation("abc", "def"));
console.log(checkPermutation("asdlfjk", "as"));
console.log(checkPermutation("god    ", "dog"));
