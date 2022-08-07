import '../../css/common.scss';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#staticBackdrop'),
  subBtn: document.querySelector('[data-subscribe]'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPT = 3;

let promptCounter = 0;
let hasSubscibed = false;

// const intervalID = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPT) {
//         console.log('You need to stop Interval');
//         clearInterval(intervalID)
//         return
//     }
//     console.log('Subscribe: ', Date.now());
//     promptCounter += 1
// }, PROMPT_DELAY)

const modal = new BSN.Modal('#staticBackdrop');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subBtn.addEventListener('click', onSubClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPT || hasSubscibed) {
    // console.log(hasSubscibed);
    // console.log('Finished');
    return;
  }
  setTimeout(() => {
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubClick() {
  hasSubscibed = true;
  modal.hide();
}
