import '../../css/common.scss';
import pokemonCardTpl from '../../templates/pokemon-card.hbs';
import api from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

// fetchPokemon(6)
//   .then(renderPokemonCard)
//   .catch(error => {
//     console.log(error);
//   });

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const id = form.elements.query.value;

  api
    .fetchPokemon(id)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}
// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(response => {
//     //   console.log(response.json());
//     return response.json();
//   })
//   .then(renderPokemonCard)
//   .catch(error => {
//     console.log(error);
//   });

function renderPokemonCard(pokemon) {
  console.log('THEN in fetchPokemon');
  refs.cardContainer.innerHTML = pokemonCardTpl(pokemon);
}

function onFetchError(error) {
  console.log('CATCH');
  console.log('onFetchError');
}

fetch(
  'https://pixabay.com/api/?key=29161019-6ea1164b9701eafe63306bc8a&q=dog+cat&image_type=photo'
)
  .then(response => response.json())
  .then(pokemon => console.log(pokemon));
