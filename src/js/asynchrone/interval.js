const infoLog = time => {
  console.log(`Function started in ${time}ms - right now is ${Date.now()}`);
};

const testInterval = setInterval(infoLog, 2000, 2000);

setTimeout(() => {
    clearInterval(testInterval);
    console.log('Finished');
}, 10000);
