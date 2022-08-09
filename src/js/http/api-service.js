const BASE_URL = 'https://pokeapi.co/api/v2';
 function fetchPokemon(id) {
  return fetch(`${BASE_URL}/pokemon/${id}`).then(response => {
    return response.json();
  });
  // .then(renderPokemonCard)
  // .catch(error => {
  //   console.log(error);
  // });
}

export default {fetchPokemon}