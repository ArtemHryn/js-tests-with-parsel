// const date = new Date()
const date = Date.now()
console.log(date);

setTimeout(() => {
    console.log(Date.now());
    console.log(Date.now() - date);
}, 2000)