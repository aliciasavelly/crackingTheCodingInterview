/*

URLify: Write a method to replace all spaces in a string with '%20'. You may
assume that the string has sufficient space at the end to hold the additional
characters, and that you are given the "true" length of the string.

*/

function URLify(string, length) {
  let result = "";

  for (let i = 0; i < length; i++) {
    if (string.charCodeAt(i) == 32) {
      result += "%20";
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(URLify("Mr John Smith      ", 13) == "Mr%20John%20Smith");
