const microBenchmark = require('micro-benchmark');
const { longString } = require('./string');

const result = microBenchmark.suite({
  duration: 100,
  specs: [
    {
      name: 'not-optimal-script',
      fn: function () {
        const removeDoublesChars1 = (str) => {
          return str
            .split('')
            .reduce(
              (acc, item) => (acc.at(-1) === item ? acc : [...acc, item]),
              []
            )
            .join('');
        };
        removeDoublesChars1(longString);
      },
    },
    {
      name: 'optimal-simple-script',
      fn: function () {
        function removeDoublesChars2(str) {
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
        removeDoublesChars2(longString);
      },
    },
    {
      name: 'optimal-modern-ES-script',
      fn: function () {
        const removeDoublesChars3 = (str) => {
          let res = '';
          str.split('').map((elem, index, arr) => {
            if (elem !== arr[index - 1]) res += elem;
          });
          return res;
        };
        removeDoublesChars3(longString);
      },
    },
  ],
});

const report = microBenchmark.report(result, {
  chartWidth: 10 /* 30 is default */,
});
console.log(report);
