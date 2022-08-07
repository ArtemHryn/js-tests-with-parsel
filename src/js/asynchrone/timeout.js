import '../../css/common.scss';

// console.log('Before Timeout');

// setTimeout(() => {
//   console.log('2000 - In setTimeout');
// }, 2000);

// setTimeout(
//   x => {
//     console.log(x);
//     console.log('1000 - In setTimeout');
//   },
//   1000,
//   5
// );

// console.log('After Timeout');
// for (let i = 0; i < 1; i += 1) {
//   console.log(i);
//   //   console.clear();
// }

// console.log('Final console');

// console.log('one more Final');

const infoLog = time => {
  console.log(`The functions started after ${time}ms`);
};

const timerID = setTimeout(infoLog, 2000, 2000); //второй 2000 это параметр для функции timer
const shouldCancleTime = true;

// console.log("timerID", timerID);

if (shouldCancleTime) {
  clearTimeout(timerID);
}

const infoInterval = time => console.log(`Log every ${time}ms = ${Date.now()}`);
console.log('Some text BEFORE interval');
const intervalID = setInterval(infoInterval, 2000, 2000);
console.log('SOme text after interval');
console.log(intervalID);

setTimeout(() => {
  clearInterval(intervalID);
}, 10000);
