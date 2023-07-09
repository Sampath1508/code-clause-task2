let timerInterval;
let timerSeconds = 0;
let stopwatchInterval;
let stopwatchSeconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("start-timer").disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("start-timer").disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimer();
    document.getElementById("start-timer").disabled = false;
}

function updateTimer() {
    let hours = Math.floor(timerSeconds / 3600);
    let minutes = Math.floor((timerSeconds % 3600) / 60);
    let seconds = Math.floor(timerSeconds % 60);

    document.getElementById("timer-display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    timerSeconds++;
}

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    document.getElementById("start-stopwatch").disabled = true;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById("start-stopwatch").disabled = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    updateStopwatch();
    document.getElementById("start-stopwatch").disabled = false;
}

function updateStopwatch() {
    let hours = Math.floor(stopwatchSeconds / 3600);
    let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    let seconds = Math.floor(stopwatchSeconds % 60);

    document.getElementById("stopwatch-display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    stopwatchSeconds++;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
