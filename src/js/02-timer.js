import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

const currentDate = new Date();

let countdownInterval;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    const selectedDate = new Date(selectedDates[0]);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      console.log(startBtn);
      startBtn.setAttribute('disabled', true);
    } else {
      console.log(startBtn);
      startBtn.removeAttribute('disabled');
    }
  },
});

// startBtn.addEventListener('submit', () => {
//   console.log('alert');
// });

//   window.alert('Please choose a date in the future');
