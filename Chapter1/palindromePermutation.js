/*

Palindrome Permutation: Given a string, write a function to check if it is a
permutation of a palindrome. A palindrome is a word or phrase that is the same
forwards and backwards. A permutation is a rearrangement of letters. The
palindrome does not need to be limited to just dictionary words.

*/

function palindromePermutation(inputString) {
  inputString = inputString.toLowerCase();
  let oddLen = (inputString.length % 2 == 0 ? false : true);
  let strHash = {};

  for (let i = 0; i < inputString.length; i++) {
    if (strHash[inputString[i]] == undefined && inputString.charCodeAt(i) != 32) {
      strHash[inputString[i]] = 1;
    } else if (inputString.charCodeAt(i) != 32) {
      strHash[inputString[i]] += 1;
    }
  }

  let odd = 0;
  for (let key in strHash) {
    if (strHash[key] % 2 != 0) {
      odd += 1;
    }
  }

  return odd <= 1;
}

console.log(palindromePermutation("Tact Coa"));
console.log(palindromePermutation("Tacts Coa"));
