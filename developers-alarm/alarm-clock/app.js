// Imports modules
const fs = require("fs");
const path = require("path");
const sound = require("sound-play");

// Gives files and it's path
const fileName = "tones/tone.mp3";
const filePath = path.join(__dirname, fileName);

const alarmTime = 25;    // Here set your alarm time to the variable "alarmTime"
const miliSecond = (alarmTime * 60) * 1000; // Converts minutes to mili-seconds

// Function for playing alarm
function playSound(err) {
    if (err) {
        console.error(err);
    } else {
        sound.play(filePath);
        console.log("It's time to take rest!");
    }
}

// Ensures alarm will play after a certain time
setInterval(playSound, miliSecond);