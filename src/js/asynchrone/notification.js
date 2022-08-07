import '../../css/common.scss'

const notification = document.querySelector('.js-alert');
const NOTIFICATON_DELAY = 3000
let timeoutID = null;

notification.addEventListener('click', onNotificationClick)

// setInterval(() => {
//     showNotification()
// }, 5000)

showNotification()

function onNotificationClick() {
    hideNotification()
    clearTimeout(timeoutID)
}

function showNotification() {
    notification.classList.add('is-visible')
    timeoutID = setTimeout(() => {
        console.log('Timer');
        notification.classList.remove('is-visible');
    }, NOTIFICATON_DELAY)
}

function hideNotification() {
    notification.classList.remove('is-visible')
    
}