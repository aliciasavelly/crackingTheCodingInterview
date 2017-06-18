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
