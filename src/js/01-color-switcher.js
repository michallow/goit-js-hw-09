const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColor = color => {
  document.body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});
