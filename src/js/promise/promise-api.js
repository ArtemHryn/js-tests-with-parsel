// let data = 'Empty'
const testPromise = new Promise((resolve, reject) => {
  const randomMath = Math.random() > 0.5;

  setTimeout(() => {
    if (randomMath) {
      resolve('The issue has been resolved');
    }

    reject('The issue has been rejected');
  }, 1000);
});

// console.log(testPromise);
// testPromise.then(
//   onSuccess, //Функцію можно викликати 2 варіантами
//   onError
// );

function onSuccess(result) {
  console.log(result);
  // data = result
}

function onError(error) {
  console.log(error);
  // data = result
}

// setTimeout(() => {
//   console.log(data);
// }, 1000)

testPromise
  .then(result => {
    console.log(result);
    // throw new Error('Oops, something wrong')
    return result;
  })
  .then(result2 => {
    console.log(result2 +' 2');
    return result2;
  })
  .then(result3 => {
    console.log(result3 + ' 3');
  }).catch(error => {
    console.log(error);
  }).finally(() => { console.log('Will be finished in any case');})