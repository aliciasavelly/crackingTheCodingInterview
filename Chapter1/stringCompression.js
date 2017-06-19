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
