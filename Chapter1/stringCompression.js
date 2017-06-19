/*

String Compression: Implemented a method to perform basic string compression
using the counts of repeated characters. If the "compressed" string would not
become smaller than the original string, your method should return the original
string. You can assume the string has only uppercase and lowercase letters
(a - z).

*/

function stringCompression(string) {
  let count = 1;
  let currentLetter = string[0];
  let result = "";

  for (let i = 1; i < string.length; i++) {
    if (string[i] == currentLetter) {
      count++;
    } else {
      result += currentLetter + String(count);
      count = 1;
      currentLetter = string[i];
    }
  }

  result += currentLetter + String(count);
  return (string.length <= result.length ? string : result);
}

console.log(stringCompression("aabcccccaaa") == "a2b1c5a3");
console.log(stringCompression("abcccd") == "abcccd");
