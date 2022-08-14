async function showSomthing(key) {
  const obj = {
    art: 12,
    gr: 32,
  };

  return new Promise(resolve =>
    setTimeout(() => {
      resolve(obj[key]);
    }, 2000)
  );
}

function makeMix() {
  showSomthing('art').then(console.log);
  showSomthing('gr').then(console.log);
}

async function asyncMakeMix() {
  try {
    console.time('test');
    //   const art = await showSomthing('art');
    //   console.log(art);
    //   const gr = await showSomthing('gr');
    //   console.log(gr);
    const art = showSomthing('art');
    const gr = showSomthing('gr');
    const myRes = await Promise.all([art, gr]);
    // console.log(myRes);
    console.timeEnd('test');
      return myRes;
  } catch (error) {
    console.log(error);
  }
}

asyncMakeMix().then(console.log)

// console.log()

// makeMix();
// console.log(1);
