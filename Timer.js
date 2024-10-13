////////// Timing js

// References
let displayTime = document.querySelector('#number'); // Timer display
let circle = document.querySelector('circle');  // Circle element for stroke animation
let startButton = document.querySelector('#start-timer');
let stopButton = document.querySelector('#stop-timer');
let hoursInput = document.querySelector('#hours');
let minutesInput = document.querySelector('#minutes');
let div1 = document.querySelector('.div1');

let interval; // To hold the setInterval ID
let totalTimeInSeconds; // Total time in seconds
let remainingTime; // Remaining time in seconds

// Start button functionality
startButton.addEventListener('click', function() {
    let hours = parseInt(hoursInput.value) || 0; // Get hours, default to 0
    let minutes = parseInt(minutesInput.value) || 0; // Get minutes, default to 0
    
    // Calculate total time in seconds
    totalTimeInSeconds = (hours * 60 * 60) + (minutes * 60);
    
    // Clear any running intervals
    if (interval) {
        clearInterval(interval);
    }

    // Start countdown
    startCountdown(totalTimeInSeconds);
    startButton.style.opacity= '0'
    div1.style.opacity= '0'

});

// Stop button functionality
stopButton.addEventListener('click', function() {
    // Clear interval and reset time and circle
    if (interval) {
        clearInterval(interval);
        startButton.style.opacity= '1'
        div1.style.opacity= '1'
    }
    remainingTime = 0;
    updateDisplay(remainingTime);
    updateCircle(0);
});

// Function to start the countdown
function startCountdown(duration) {
    remainingTime = duration; // Set remaining time

    interval = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(interval);
            startButton.style.opacity= '1'
            div1.style.opacity= '1'
            alert('Time is up!💔');
            return; // Stop the timer when it reaches 0
        }

        // Update the display and circle
        updateDisplay(remainingTime);
        updateCircle(remainingTime);

        remainingTime--; // Decrement the time
    }, 1000);
}

// Function to update the time display
function updateDisplay(remainingTime) {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    // Display the time in HH:MM format
    displayTime.innerHTML = `${hours}:${minutes.toString().padStart(2, '0')}`;
}

// Function to update the progress circle
function updateCircle(remainingTime) {
    const totalStrokeDashArray = 440; // Total dash array for the circle
    let progress = (remainingTime / totalTimeInSeconds) * totalStrokeDashArray;
    circle.style.strokeDashoffset = progress; // Update circle stroke dash offset
    return progress
}
console.log(circle.style.strokeDashoffset);

////////// Timing js











// // References
// let displayTime = document.querySelector('#display-time');
// let ddHours = document.querySelector('#dd-hours');  // Hours stroke
// let ddMinutes = document.querySelector('#dd-minutes');  // Minutes stroke
// let day_dot = document.querySelector('.dots');
// let startButton = document.querySelector('#start-timer');
// let hoursInput = document.querySelector('#hours');
// let minutesInput = document.querySelector('#minutes');
// let stopButton = document.querySelector('#stop-timer');

// let interval;
// let totalTimeInSeconds; // Declare totalTimeInSeconds in a broader scope
// let remainingTime; // Add this variable to keep track of remaining time

// startButton.addEventListener('click', function() {
//     let hours = parseInt(hoursInput.value);
//     let minutes = parseInt(minutesInput.value);
//     totalTimeInSeconds = (hours * 60 * 60) + (minutes * 60); // Update this line to assign value

//     // Clear previous interval if exists
//     if (interval) {
//         clearInterval(interval);
//     }

//     startCountdown(totalTimeInSeconds);
// });

// stopButton.addEventListener('click', function() {
//     // Clear the interval to stop the countdown
//     if (interval) {
//         clearInterval(interval);
//         interval = null; // Reset interval
//     }
    
//     // Reset remaining time and display to zero
//     remainingTime = 0; // This will effectively pause and reset the timer
//     updateDisplay(remainingTime);
// });

// function startCountdown(duration) {
//     remainingTime = duration; // Set the initial remaining time

//     interval = setInterval(function() {
//         // Calculate hours, minutes, and seconds
//         let h = Math.floor(remainingTime / (60 * 60));
//         let m = Math.floor((remainingTime % (60 * 60)) / 60);
//         let s = Math.floor(remainingTime % 60);

//         // Display updated time
//         updateDisplay(remainingTime);

//         // Update stroke animation for hours and minutes separately
//         let hoursProgress = 440 - (440 * h) / 24;  // 24 hours in a day
//         let minutesProgress = 440 - (440 * m) / 60;  // 60 minutes in an hour

//         // Apply the changes to each circle separately
//         ddHours.style.strokeDashoffset = hoursProgress;  // Update hours circle
//         ddMinutes.style.strokeDashoffset = minutesProgress;  // Update minutes circle

//         // Rotate dot based on seconds (6 degrees per second, as 60 seconds make a full rotation)
//         day_dot.style.transform = `rotate(${s * -6}deg)`;

//         remainingTime--;

//         // Stop the countdown when remaining time is less than zero
//         if (remainingTime < 0) {
//             clearInterval(interval);
//             alert('You are Out of Time💔');
//         }
//     }, 1000);
// }

// // Helper function to update the display
// function updateDisplay(remainingTime) {
//     let h = Math.floor(remainingTime / (60 * 60));
//     let m = Math.floor((remainingTime % (60 * 60)) / 60);
//     let s = Math.floor(remainingTime % 60);
//     displayTime.innerHTML = `${h}:${m.toString().padStart(2, '0')}<br><span id='lilMeow'>Remaining</span>`;
//     lilMeow.style.opacity = '1';
// }
