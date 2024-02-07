import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
let daysSpan = document.querySelector('[data-days]');
let hoursSpan = document.querySelector('[data-hours]');
let minutesSpan = document.querySelector('[data-minutes]');
let secondsSpan = document.querySelector('[data-seconds]');
let selectedDate = '';
let currentDate = new Date();

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    console.log(selectedDates[0]);
    selectedDate = new Date(selectedDates[0]);
    // const currentDate = new Date();
    if (selectedDate < currentDate) {
      window.alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
});

startBtn.addEventListener('click', () => {
  setInterval(() => {
    currentDate = new Date();
    convertMs(selectedDate - currentDate);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  daysSpan.textContent = Math.floor(ms / day);
  hoursSpan.textContent = Math.floor((ms % day) / hour);
  minutesSpan.textContent = Math.floor(((ms % day) % hour) / minute);
  secondsSpan.textContent = Math.floor((((ms % day) % hour) % minute) / second);
}
