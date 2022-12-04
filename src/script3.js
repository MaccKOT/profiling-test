// исправленная версия, потому что Лущенко написал неоптимальную чушь
const { longString } = require('./string');

const removeDoublesChars = (str) => {
  let res = '';
  str.split('').map((elem, index, arr) => {
    if (elem !== arr[index - 1]) res += elem;
  });
  return res;
};

for (let i = 0; i < 300; i++) {
  removeDoublesChars(longString);
  console.log(i);
}

console.log(removeDoublesChars(longString));
