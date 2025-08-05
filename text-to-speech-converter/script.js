// Create a SpeechSynthesisUtterance object – this will hold the text we want to speak
let speech = new SpeechSynthesisUtterance();

// Create an empty array to store available voices
let voices = [];

// Grab the <select> element to show voice options
let voiceSelect = document.getElementById("voiceSelect");

// This event fires when the list of voices is loaded or changed (some browsers load them asynchronously)
window.speechSynthesis.onvoiceschanged = () => {
    // Get the available voices from the browser
    voices = window.speechSynthesis.getVoices();

    // Set a default voice (first one in the list)
    speech.voice = voices[0];

    // Clear any existing options in the <select>
    voiceSelect.innerHTML = "";

    // Populate the <select> dropdown with the list of voices
    voices.forEach((voice, i) => {
        // Create a new <option> element with voice name and index
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// When the user selects a new voice from the dropdown
voiceSelect.addEventListener("change", () => {
    // Set the selected voice on the speech object
    speech.voice = voices[voiceSelect.value];
});

// When the user clicks the "Listen" button
document.getElementById("button").addEventListener("click", () => {
    // Get the text from the <textarea>
    speech.text = document.getElementById("textarea").value;

    // Use the Web Speech API to speak the text using the selected voice
    window.speechSynthesis.speak(speech);
});


//Workflow of this code:
// 1. Create a speech synthesis object to hold the text and voice.
// 2. Get the list of available voices when they are loaded.
// 3. Populate the dropdown menu with those voices.
// 4. Set the default voice for speech.
// 5. Update the speech voice when the user selects a different one.
// 6. On button click, get the text from the textarea.
// 7. Use the Web Speech API to speak the entered text with the selected voice.
