import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
let daysSpan = document.querySelector('[data-days]');
let hoursSpan = document.querySelector('[data-hours]');
let minutesSpan = document.querySelector('[data-minutes]');
let secondsSpan = document.querySelector('[data-seconds]');
let selectedDate = '';
let currentDate = new Date();
let countdownInterval;

Notiflix.Notify.init({
  width: '350px',
  position: 'center-center',
  timeout: 10000,
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    console.log(selectedDates[0]);
    selectedDate = new Date(selectedDates[0]);
    if (selectedDate < currentDate) {
      Notiflix.Notify.info('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
});

startBtn.addEventListener('click', () => {
  countdownInterval = setInterval(() => {
    currentDate = new Date();
    convertMs(selectedDate - currentDate);
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function convertMs(ms) {
  if (ms <= 0) {
    clearInterval(countdownInterval);
  }

  const remainingDays = Math.floor(ms / day);
  const remainingHours = Math.floor((ms % day) / hour);
  const remainingMinutes = Math.floor(((ms % day) % hour) / minute);
  const remainingSeconds = Math.floor((((ms % day) % hour) % minute) / second);

  if (
    remainingDays === 0 &&
    remainingHours === 0 &&
    remainingMinutes === 0 &&
    remainingSeconds === 0
  ) {
    clearInterval(countdownInterval);
  }

  daysSpan.textContent = addLeadingZero(remainingDays);
  hoursSpan.textContent = addLeadingZero(remainingHours);
  minutesSpan.textContent = addLeadingZero(remainingMinutes);
  secondsSpan.textContent = addLeadingZero(remainingSeconds);
}
