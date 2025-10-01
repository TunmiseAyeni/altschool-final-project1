// Get elements from HTML
var timeDisplay = document.getElementById("timeDisplay");
var startStopBtn = document.getElementById("startStopBtn");
var resetBtn = document.getElementById("resetBtn");

// Variables to track time
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

// Variable to store the interval
var timerInterval = null;

// Variable to check if timer is running
var isRunning = false;

// Function to start the stopwatch
function startTimer() {
  // Check if timer is already running
  if (isRunning) {
    // Stop the timer
    clearInterval(timerInterval);
    isRunning = false;
  } else {
    // Start the timer
    isRunning = true;
    timerInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
  }
}

// Function to update the time
function updateTime() {
  // Increase milliseconds
  milliseconds++;

  // When milliseconds reach 100, increase seconds
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }

  // When seconds reach 60, increase minutes
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  // When minutes reach 60, increase hours
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  // Update the display
  displayTime();
}

// Function to display time on screen
function displayTime() {
  // Add leading zeros if needed
  var h = hours < 10 ? "0" + hours : hours;
  var m = minutes < 10 ? "0" + minutes : minutes;
  var s = seconds < 10 ? "0" + seconds : seconds;
  var ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  // Update the time display
  timeDisplay.textContent = h + ":" + m + ":" + s + ":" + ms;
}

// Function to reset the stopwatch
function resetTimer() {
  // Stop the timer
  clearInterval(timerInterval);
  isRunning = false;

  // Reset all time variables to zero
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  // Update display to show zeros
  displayTime();
}

// Add event listeners to buttons
startStopBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
