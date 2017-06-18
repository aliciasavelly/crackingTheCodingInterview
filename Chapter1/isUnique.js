/*

Is Unique: Implement an algorithm to determine if a string has all unique
characters. What if you cannot use additional data structures?

*/

// function isUnique(string) {
//   let letters = {};
//
//   for (let i = 0; i < string.length; i++) {
//     if (letters[string[i]] == undefined) {
//       letters[string[i]] = true;
//     } else {
//       return false;
//     }
//   }
//
//   return true;
// }

function isUnique(string) {
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] == string[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isUnique("Alicia"));
console.log(isUnique("App Academy"));
console.log(isUnique("qwertyy"));
console.log(isUnique("Aa"));
console.log(isUnique("abcdefg"));
