// Timer fields
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const millisecondsElement = document.querySelector(".milliseconds");

// Buttons
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const resultButton = document.querySelector(".result");
const resultsInfo = document.querySelector(".results");

// BUTTONS ПРОСЛУШКА
// start buttons
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
// pause buttons
pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});
// stop button
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
  disableBtn();
});

// result button
resultButton.addEventListener("click", () => {
  clearInterval(interval);
  counter++
  const block = document.createElement("div");
  block.classList.add("results__block-info");
  block.innerText = `Result ${counter}:  ${hours}:${minutes}:${seconds}:${milliseconds}`;
  resultsInfo.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  

});

// Variables
let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;
let counter = 0;
let disabled = true;

function startTimer() {
  // milliseconds
  milliseconds++;
  if (milliseconds < 9) {
    millisecondsElement.innerText = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    millisecondsElement.innerText = milliseconds;
  }

  if (milliseconds > 99) {
    seconds++;
    secondsElement.innerText = "0" + seconds;
    milliseconds = 0;
    millisecondsElement.innerText = "0" + milliseconds;
  }
  // seconds
  if (seconds > 9) {
    secondsElement.innerText = seconds;
  }

  if (seconds > 59) {
    minutes++;
    minutesElement.innerText = "0" + minutes;
    seconds = 0;
    secondsElement.innerText = "0" + seconds;
  }

  //   minutes
  if (minutes < 9) {
    minutesElement.innerText = "0" + minutes;
  }
  if (minutes > 9) {
    minutesElement.innerText = minutes;
  }
  if (minutes > 59) {
    hours++;
    hoursElement.innerText = "0" + hours;
    minutes = 0;
    minutesElement.innerText = "0" + minutes;
  }

  // Hours
  if (hours < 9) {
    hoursElement.innerText = "0" + hours;
  }
  if (hours > 9) {
    hoursElement.innerText = hours;
  }

  resultButton.disabled = false
}

function clearFields() {
  let hours = 00;
  let minutes = 00;
  let seconds = 00;
  let milliseconds = 00;
  hoursElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";
  millisecondsElement.textContent = "00";
}

function disableBtn() {
  if(disabled) {
    resultButton.disabled = true
  }
}
disableBtn();