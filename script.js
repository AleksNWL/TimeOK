const stopwatchContainer = document.querySelector('.stopwatch-container');
const stopwatch = stopwatchContainer.querySelector('.stopwatch');
const buttonStart = stopwatchContainer.querySelector('.stopwatch__button-start');
const buttonReset = stopwatchContainer.querySelector('.stopwatch__button-reset');

let time = { minutes: 0, seconds: 0, milliseconds: 0 };
let isRunning = false;
let intervalID = null;

stopwatch.textContent = '00:00:00';

const formatNumber = num => num.toString().padStart(2, '0');

function updateStopwatch() {
    time.milliseconds++;
    
    if (time.milliseconds === 100) {
        time.milliseconds = 0;
        time.seconds++;
    }

    if (time.seconds === 60) {
        time.seconds = 0;
        time.minutes++;
    }

    stopwatch.textContent = [
        formatNumber(time.minutes),
        formatNumber(time.seconds),
        formatNumber(time.milliseconds)
    ].join(':');
};

buttonStart.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalID);
        buttonStart.textContent = 'START';
    } else {
        intervalID = setInterval(updateStopwatch, 10);
        buttonStart.textContent = 'PAUSE';
    }
    isRunning = !isRunning;
});

buttonReset.addEventListener('click', () => {
    clearInterval(intervalID);
    time = { minutes: 0, seconds: 0, milliseconds: 0 };
    buttonStart.textContent = 'START';
    stopwatch.textContent = '00:00:00';
    isRunning = !isRunning;
});