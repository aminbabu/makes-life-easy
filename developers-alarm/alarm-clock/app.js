// Imports modules
const fs = require("fs");
const path = require("path");
const sound = require("sound-play");

// Set alarm files
// You can change these file according to your interest
const workFile = "tones/stop_doing_that.mp3";
const restFile = "tones/work_calling.mp3";

// Give file's path
const workAlarm = path.join(__dirname, workFile);
const restAlarm = path.join(__dirname, restFile);

const workTime = 25; // Set work time (minute)
const restTime = 5; // Set rest time (minute)

// Function to convert minute to milisecond
function minuteToMS(minute) {
  return minute * 60 * 1000;
}

const workMS = minuteToMS(workTime);
const restMS = minuteToMS(restTime);

// Function for playing alarm to take rest and start work
(function playSound() {
  setTimeout(() => {
    // Work Time
    sound.play(workAlarm);
    console.log("Take Rest!\n");
    setTimeout(() => {
      // Rest Time
      sound.play(restAlarm);
      console.log("Start Work!\n");
      playSound();
    }, restMS);
  }, workMS);
})();
