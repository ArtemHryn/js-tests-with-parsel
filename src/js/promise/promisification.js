const makeOrder = dish => {
  const DELAY = 1000;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const passed = Math.random() > 0.5;
      if (passed) {
          resolve(`The ${dish} has been ordered`);
      }
      reject(`Sorry, there is no ${dish}`);
    }, DELAY);
  });
  return promise;
};

// makeOrder('something', onMakedOrder, onErrorOrder);
makeOrder('Cacke').then(onMakedOrder).catch(onErrorOrder);

function onMakedOrder(result) {
  console.log(result);
}

function onErrorOrder(error) {
  console.log(error);
}

const fetchPokemonById = id => {
 return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json())
    // .then(pokemon => console.log('pokemon', pokemon))
    // .catch(error => console.log(error));
};

 

fetchPokemonById(1).then(onSuccess).catch(onError);
fetchPokemonById(2).then(onSuccess).catch(onError);

function onSuccess(pokemon) {
console.log("✅onSuccess ~ onSuccess")
  console.log(pokemon);  
}

function onError(error) {
console.log("❌onError ~ onError")
    console.log(error);
}