const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const elapsedTimeElement = document.getElementById('elapsed-time');
const table = document.getElementById('results-table');
let startTime;
let running = false;
let rowNumber = 1;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
  if (!running) {
    startTime = Date.now();
    running = true;
    setInterval(updateElapsedTime, 1000);
  }
}

function stopTimer() {
  if (running) {
    const stopTime = Date.now();
    const elapsedTime = stopTime - startTime;
    running = false;
    addTableRow(elapsedTime);
  }
}

function updateElapsedTime() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  elapsedTimeElement.textContent = formattedTime;
}

function addTableRow(elapsedTime) {
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  cell1.textContent = rowNumber++;
  cell2.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / 1000 / 60) % 60;
  const hours = Math.floor(time / 1000 / 60 / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}