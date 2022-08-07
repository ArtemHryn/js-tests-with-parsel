import '../../css/common.scss';

const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockFace: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalID = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    this.setTime(0);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      this.setTime(deltaTime);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
    this.isActive = false;
    this.setTime(0);
  }
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, minutes, seconds };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  setTime(timeToSet) {
    const time = this.getTimeComponents(timeToSet);
    this.onTick(time);
  }
}

const timer = new Timer({ onTick: updateClockface });

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, minutes, seconds }) {
  refs.clockFace.textContent = `${hours}:${minutes}:${seconds}`;
}

// const timer = {
//   intervalID: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalID = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       // console.log('Start Time: ', startTime);
//       // console.log(currentTime - startTime);
//       const time = getTimeComponents(deltaTime);
//       //   console.log(`${hours}::${minutes}::${seconds}`);
//       updateClockface(time);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalID);
//     this.isActive = false;
//   },
// };
