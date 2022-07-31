import '../css/common.css';
import '../css/colorpicker.css'
import colorCardTemplate from '../templates/color-card.hbs';
import colorCardEachTemplate from '../templates/color-cards-each.hbs';
import colorsJSON from './color.json';

console.log(colorCardTemplate(colorsJSON[1]));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];

const palleteContainer = document.querySelector('.js-palette');

palleteContainer.insertAdjacentHTML('beforeend', createColorMarkup(colorsJSON));
console.log(createColorMarkup(colorsJSON));

palleteContainer.addEventListener('click', onPalletteContainerClick);

function createColorMarkup(colors) {
  //   const markup = colors.map(color => colorCardTemplate(color)).join('');
  const markup = colorCardEachTemplate(colors);
  return markup;
}

function onPalletteContainerClick(e) {
  if (!e.target.classList.contains('color-swatch')) {
    return;
  }
  removeActiveCardClass();
  addActiveCardClass(e.target);
  setBodyBgColor(e.target.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(target) {
  const parentColorCard = target.closest('.color-card');
  //   console.log(parentColorCard);
  parentColorCard.classList.add('is-active');
}
