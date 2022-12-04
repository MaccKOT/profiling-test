// new style sort of
const { longString } = require('./string');

const removeDoublesChars = (str) => {
  return str
    .split('')
    .reduce((acc, item) => (acc.at(-1) === item ? acc : [...acc, item]), [])
    .join('');
};

for (let i = 0; i < 300; i++) {
  removeDoublesChars(longString);
  console.log(i);
}

console.log(removeDoublesChars(longString));
