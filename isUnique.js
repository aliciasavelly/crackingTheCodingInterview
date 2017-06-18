/*

Is Unique: Implement an algorithm to determine if a string has all unique
characters. What if you cannot use additional data structures?

*/

function isUnique(string) {
  let letters = {};

  for (let i = 0; i < string.length; i++) {
    if (letters[string[i]] == undefined) {
      letters[string[i]] = true;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isUnique("Alicia"));
console.log(isUnique("App Academy"));
console.log(isUnique("Aa"));
console.log(isUnique("abcdefg"));
