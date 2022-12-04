// old style of js
const { longString } = require('./string');

function removeDoublesChars(str) {
  let res = str[0];
  let s = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== s) {
      res += str[i];
      s = str[i];
    }
  }

  return res;
}

for (let i = 0; i < 300; i++) {
  removeDoublesChars(longString);
  console.log(i);
}
console.log(removeDoublesChars(longString));
