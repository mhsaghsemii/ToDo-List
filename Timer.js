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

