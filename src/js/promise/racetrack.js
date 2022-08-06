import '../../css/racetrack.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];
let raceCounter = 0;
const refs = {
  startBtm: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table'),
};

refs.startBtm.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(horse => run(horse));
  updateProggress('Race has been started');
  updateWinnerField('');
  determinateWinner(promises);
  waitForAll(promises);
}

function determinateWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
    времени`);
    UpdateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProggress('The race has been finished');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProggress(message) {
  refs.progressField.textContent = message;
}

function UpdateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

// const promises = horses.map(horse => run(horse));

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c 🎉 Победил ${horse}, финишировав за ${time}
//     времени`,
//     'color: green'
//   );
// });

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
