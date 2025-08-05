// Get the clock element by its ID
const clock = document.getElementById('clock');

// Update the clock every second using setInterval
setInterval(() => {
    // Create a new Date object to get the current time
    let date = new Date();
    // Set the inner HTML of the clock element to the current time as a string
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // Interval set to 1000 milliseconds (1 second)