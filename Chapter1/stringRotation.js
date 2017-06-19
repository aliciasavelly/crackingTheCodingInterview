/*

String Rotation: Assume you have a method isSubstring which checks if one word
is a substring of another. Given to strings, s1 and s2, write code to check if
s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle"
is a rotation of "erbottlewat").

*/

// check if s2 is substring of s1
function isSubstring(s1, s2) {
  let len = s2.length;

  for (let i = 0; i <= s1.length - len; i++) {
    if (s1.slice(i, i + len) == s2) {
      return true;
    }
  }

  return false;
}

console.log(isSubstring("Alicia", "Alicia"));
// console.log(isSubstring("Alicia", "ia"));
// console.log(isSubstring("Alicia", "ici"));
// console.log(isSubstring("Alicia", "cia"));
// console.log(isSubstring("Alicia", "fasdl"));
// console.log(isSubstring("Alicia", "f"));

// check if s2 is a rotation of s1
function stringRotation(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[0] && s1.slice(i, s1.length) == s2.slice(0, s1.length - i)) {
      if (isSubstring(s1.slice(i, s1.length) + s1.slice(0, i), s2)) {
        return true;
      }
    }
  }

  return false;
}

console.log(stringRotation("erbottlewat", "waterbottle") == true);
console.log(stringRotation("erbottlewap", "waterbottle") == false);
